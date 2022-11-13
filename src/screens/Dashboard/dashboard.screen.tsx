import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import HighlightCard from '../../components/HighlightCard/highlightCard.component'
import TransactionCard, {
  DataTransactionCard,
} from '../../components/TransactionCard/transactionCard.component'
import { IFormData } from '../Register/register.screen'

import {
  loadTransactionsData,
  getLastIncomeTransactionDate,
  getLastOutcomeTransactionDate,
  getLastTransactionDate,
} from './functions/dashboard.screen.functions'

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

function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<IFormData[]>([])
  const [income, setIncome] = useState<number>(0)
  const [outcome, setOutcome] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useFocusEffect(
    useCallback(() => {
      loadTransactionsData({
        setIncome,
        setOutcome,
        setData,
        setIsLoading,
        setTotal,
      })
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
}

export default Dashboard
