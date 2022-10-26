import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './transactionCard.style'

export type DataTransactionCard = {
  id: string
  type: 'entrada' | 'saida'
  title: string
  amount: string
  category: string
  date: string
}

interface ITransactionCard {
  data: DataTransactionCard
}

function TransactionCard({ data }: ITransactionCard) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard
