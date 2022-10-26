import HighlightCard from '../../components/HighlightCard/highlightCard.component'
import TransactionCard, {
  DataTransactionCard,
} from '../../components/TransactionCard/transactionCard.component'

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
} from './dashboard.style'

import { data } from '../../utils/TransactionsData/transactionsData'

function Dashboard() {
  return (
    <Container>
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
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 5 de Outubro."
        />
        <HighlightCard
          type="saidas"
          title="Saídas"
          amount="R$ 1.300,00"
          lastTransaction="Última saida dia 19 de Outubro."
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.100,00"
          lastTransaction="Dia 25 de Outubro."
        />
      </CardsList>

      <TransactionsWrapper>
        <TransactionsTitle>Listagem</TransactionsTitle>

        <ListTransactions
          data={data}
          keyExtractor={(item: DataTransactionCard) => item.id}
          renderItem={({ item }: { item: DataTransactionCard }) => (
            <TransactionCard data={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </TransactionsWrapper>
    </Container>
  )
}

export default Dashboard
