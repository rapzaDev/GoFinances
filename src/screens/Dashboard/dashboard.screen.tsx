import React, { useState, useCallback } from 'react'
import HighlightCard from '../../components/HighlightCard/highlightCard.component'
import TransactionCard, {
  DataTransactionCard,
} from '../../components/TransactionCard/transactionCard.component'
import { IFormData } from '../Register/register.screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserHello,
  UserName,
  Icon,
  CardsList,
  TransactionsWrapper,
  TransactionsTitle,
  ListTransactions,
  LoadingScreen,
} from './dashboard.style'

import { getBottomSpace } from 'react-native-iphone-x-helper'

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

function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<IFormData[]>([])
  const [income, setIncome] = useState<number>(0)
  const [outcome, setOutcome] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useFocusEffect(
    useCallback(() => {
      loadTransactionsData()
    }, []),
  )

  function renderContent() {
    if (isLoading) return <LoadingScreen size="large" />
    else
      return (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/68792232?v=4',
                  }}
                />

                <User>
                  <UserHello>Olá,</UserHello>
                  <UserName>Rafael</UserName>
                </User>
              </UserInfo>

              <Icon name="power" />
            </UserWrapper>
          </Header>

          <CardsList>
            <HighlightCard
              type="entradas"
              title="Entradas"
              amount={`R$ ${income},00`}
              lastTransaction={`${getLastIncomeTransactionDate(data)}`}
            />
            <HighlightCard
              type="saidas"
              title="Saídas"
              amount={`R$ ${outcome},00`}
              lastTransaction={`${getLastOutcomeTransactionDate(data)}`}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={`R$ ${total},00`}
              lastTransaction={`${getLastTransactionDate(data)}`}
            />
          </CardsList>

          <TransactionsWrapper>
            <TransactionsTitle>Listagem</TransactionsTitle>

            {data.length > 0 && (
              <ListTransactions
                data={data}
                keyExtractor={(item: DataTransactionCard) => item.id}
                renderItem={({ item }: { item: DataTransactionCard }) => (
                  <TransactionCard data={item} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: getBottomSpace(),
                }}
              />
            )}
          </TransactionsWrapper>
        </>
      )
  }

  return <Container>{renderContent()}</Container>

  async function loadTransactionsData() {
    const dataKey = '@gofinances:transactions'

    const asyncData = await AsyncStorage.getItem(dataKey)
    const transactionsData: IFormData[] = asyncData ? JSON.parse(asyncData) : []

    let incomeTotal = 0
    let outcomeTotal = 0

    const transactionDataFormatted: IFormData[] =
      transactionsData.map<IFormData>((transaction: IFormData) => {
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
      })

    const total = incomeTotal - outcomeTotal

    setIncome(incomeTotal)
    setOutcome(outcomeTotal)
    setTotal(total)

    setData(transactionDataFormatted)
    setIsLoading(false)
  }

  function getLastIncomeTransactionDate(transactions: IFormData[]): string {
    const incomeTransactions = transactions.filter(
      (it) => it.type === 'entrada',
    )

    const index =
      incomeTransactions.length === 0 ? 0 : incomeTransactions.length - 1

    const lastTransactionDate = incomeTransactions[index].date as string

    const date = lastTransactionDate.split('/')

    const day = date[0]

    let month: String = ''

    switch (Number(date[1])) {
      case 1:
        month = 'Janeiro'
        break

      case 2:
        month = 'Fevereiro'
        break

      case 3:
        month = 'Março'
        break

      case 4:
        month = 'Abril'
        break

      case 5:
        month = 'Maio'
        break

      case 6:
        month = 'Junho'
        break

      case 7:
        month = 'Julho'
        break

      case 8:
        month = 'Agosto'
        break

      case 9:
        month = 'Setembro'
        break

      case 10:
        month = 'Outubro'
        break

      case 11:
        month = 'Novembro'
        break

      case 12:
        month = 'Dezembro'
        break
      default:
        break
    }

    return `Última entrada dia ${day} de ${month}.`
  }

  function getLastOutcomeTransactionDate(transactions: IFormData[]): string {
    const outcomeTransactions = transactions.filter((it) => it.type === 'saida')

    const index =
      outcomeTransactions.length === 0 ? 0 : outcomeTransactions.length - 1

    const lastTransactionDate = outcomeTransactions[index].date as string

    const date = lastTransactionDate.split('/')

    const day = date[0]

    let month: String = ''

    switch (Number(date[1])) {
      case 1:
        month = 'Janeiro'
        break

      case 2:
        month = 'Fevereiro'
        break

      case 3:
        month = 'Março'
        break

      case 4:
        month = 'Abril'
        break

      case 5:
        month = 'Maio'
        break

      case 6:
        month = 'Junho'
        break

      case 7:
        month = 'Julho'
        break

      case 8:
        month = 'Agosto'
        break

      case 9:
        month = 'Setembro'
        break

      case 10:
        month = 'Outubro'
        break

      case 11:
        month = 'Novembro'
        break

      case 12:
        month = 'Dezembro'
        break
      default:
        break
    }

    return `Última saida dia ${day} de ${month}.`
  }

  function getLastTransactionDate(transactions: IFormData[]): string {
    const index = transactions.length === 0 ? 0 : transactions.length - 1

    const lastTransactionDate = transactions[index].date as string

    const date = lastTransactionDate.split('/')

    const day = date[0]

    let month: String = ''

    switch (Number(date[1])) {
      case 1:
        month = 'Janeiro'
        break

      case 2:
        month = 'Fevereiro'
        break

      case 3:
        month = 'Março'
        break

      case 4:
        month = 'Abril'
        break

      case 5:
        month = 'Maio'
        break

      case 6:
        month = 'Junho'
        break

      case 7:
        month = 'Julho'
        break

      case 8:
        month = 'Agosto'
        break

      case 9:
        month = 'Setembro'
        break

      case 10:
        month = 'Outubro'
        break

      case 11:
        month = 'Novembro'
        break

      case 12:
        month = 'Dezembro'
        break
      default:
        break
    }

    return `Última transação dia ${day} de ${month}.`
  }
}

export default Dashboard
