import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IFormData } from '../../Register/register.screen'
import theme from '../../../global/styles/theme'

type DataType = {
  Compras: { total: 0; color: string }
  Alimentação: { total: 0; color: string }
  Salário: { total: 0; color: string }
  Lazer: { total: 0; color: string }
  Estudos: { total: 0; color: string }
}

export type ResumeDataType = {
  categoria: string
  color: string
  total: number
}

export const loadData = async (
  setData: React.Dispatch<React.SetStateAction<any>>,
) => {
  const dataKey = '@gofinances:transactions'
  const responseData = await AsyncStorage.getItem(dataKey)
  const data: IFormData[] = responseData ? JSON.parse(responseData) : []

  const color = theme.color_icons

  const dataResource: DataType = {
    Compras: { total: 0, color: color.shopping_bag },
    Alimentação: { total: 0, color: color.coffee },
    Salário: { total: 0, color: color.dollar_sign },
    Lazer: { total: 0, color: color.heart },
    Estudos: { total: 0, color: color.book },
  }

  data.forEach((transaction) => {
    switch (transaction.category) {
      case 'Compras':
        dataResource.Compras.total += Number(transaction.amount)
        break
      case 'Alimentação':
        dataResource.Alimentação.total += Number(transaction.amount)
        break
      case 'Salário':
        dataResource.Salário.total += Number(transaction.amount)
        break
      case 'Lazer':
        dataResource.Lazer.total += Number(transaction.amount)
        break
      case 'Estudos':
        dataResource.Estudos.total += Number(transaction.amount)
        break
      default:
        break
    }
  })

  const resource: ResumeDataType[] = Object.entries(dataResource).map((it) => ({
    categoria: it[0],
    color: it[1].color,
    total: it[1].total,
  }))

  setData(resource)
}
