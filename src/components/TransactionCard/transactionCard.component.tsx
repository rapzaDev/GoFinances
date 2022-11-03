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
  category: 'Compras' | 'Alimentação' | 'Salário' | 'Lazer' | 'Estudos'
  date: Date
}

interface ITransactionCard {
  data: DataTransactionCard
}

const icon = {
  Compras: 'shopping-bag',
  Alimentação: 'coffee',
  Salário: 'dollar-sign',
  Lazer: 'heart',
  Estudos: 'book',
}

function TransactionCard({ data }: ITransactionCard) {
  const amountValue = () => {
    return data.type === 'saida' ? `- ${data.amount}` : `${data.amount}`
  }

  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>{amountValue()}</Amount>

      <Footer>
        <Category>
          <Icon name={icon[data.category]} />
          <CategoryName>{data.category}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard
