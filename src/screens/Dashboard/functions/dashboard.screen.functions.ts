import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IFormData } from '../../Register/register.screen'

type LoadTransactionsType = {
  setIncome: React.Dispatch<React.SetStateAction<number>>
  setOutcome: React.Dispatch<React.SetStateAction<number>>
  setTotal: React.Dispatch<React.SetStateAction<number>>

  setData: React.Dispatch<React.SetStateAction<IFormData[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function formatDate(date: string): string {
  /**
   * @descrição Separação da string contendo somente a date: year-month-day
   */
  const onlyDate: string = date.slice(0, 10)

  /**
   * @descrição Separação da Date year-month-day em um array com 3 posições
   */
  const dateSplited = onlyDate.split('-')

  let size = dateSplited.length ? dateSplited.length - 1 : 0
  let index = 0

  const dateInverted = []

  while (size >= 0) {
    dateInverted[index++] = dateSplited[size--]
  }

  return `${dateInverted[0]}/${dateInverted[1]}/${dateInverted[2]}`
}

export async function loadTransactionsData({
  setIncome,
  setOutcome,
  setData,
  setIsLoading,
  setTotal,
}: LoadTransactionsType) {
  const dataKey = '@gofinances:transactions'

  const asyncData = await AsyncStorage.getItem(dataKey)
  const transactionsData: IFormData[] = asyncData ? JSON.parse(asyncData) : []

  let incomeTotal = 0
  let outcomeTotal = 0

  const transactionDataFormatted: IFormData[] = transactionsData.map<IFormData>(
    (transaction: IFormData) => {
      if (transaction.type === 'entrada')
        incomeTotal += Number(transaction.amount)
      else outcomeTotal += Number(transaction.amount)

      const date = formatDate(transaction.date)

      return {
        id: transaction.id,
        title: transaction.title,
        type: transaction.type,
        category: transaction.category,
        amount: `R$ ${transaction.amount},00`,
        date,
      }
    },
  )

  const total = incomeTotal - outcomeTotal

  setIncome(incomeTotal)
  setOutcome(outcomeTotal)
  setTotal(total)

  setData(transactionDataFormatted)
  setIsLoading(false)
}

function getMonth(month: number): string {
  switch (month) {
    case 1:
      return 'Janeiro'

    case 2:
      return 'Fevereiro'

    case 3:
      return 'Março'

    case 4:
      return 'Abril'

    case 5:
      return 'Maio'

    case 6:
      return 'Junho'

    case 7:
      return 'Julho'

    case 8:
      return 'Agosto'

    case 9:
      return 'Setembro'

    case 10:
      return 'Outubro'

    case 11:
      return 'Novembro'

    case 12:
      return 'Dezembro'

    default:
      return ''
  }
}

export function getLastIncomeTransactionDate(
  transactions: IFormData[],
): string {
  const incomeTransactions = transactions.filter((it) => it.type === 'entrada')

  const index =
    incomeTransactions.length === 0 ? 0 : incomeTransactions.length - 1

  const lastTransactionDate = incomeTransactions[index].date as string

  const date: string[] = lastTransactionDate.split('/')

  const day: string = date[0]

  const month: string = getMonth(Number(date[1]))

  return `Última entrada dia ${day} de ${month}.`
}

export function getLastOutcomeTransactionDate(
  transactions: IFormData[],
): string {
  const outcomeTransactions = transactions.filter((it) => it.type === 'saida')

  const index =
    outcomeTransactions.length === 0 ? 0 : outcomeTransactions.length - 1

  const lastTransactionDate = outcomeTransactions[index].date as string

  const date = lastTransactionDate.split('/')

  const day = date[0]

  const month: string = getMonth(Number(date[1]))

  return `Última saida dia ${day} de ${month}.`
}

export function getLastTransactionDate(transactions: IFormData[]): string {
  const index = transactions.length === 0 ? 0 : transactions.length - 1

  const lastTransactionDate = transactions[index].date as string

  const date = lastTransactionDate.split('/')

  const day = date[0]

  const month: string = getMonth(Number(date[1]))

  return `Última transação dia ${day} de ${month}.`
}
