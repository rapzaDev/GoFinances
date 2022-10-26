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
  category: 'Programacao' | 'Casa' | 'Gatos' | 'Vendas' | 'Despesas'
  date: string
}

interface ITransactionCard {
  data: DataTransactionCard
}

const icon = {
  Programacao: 'monitor',
  Casa: 'home',
  Gatos: 'github',
  Vendas: 'dollar-sign',
  Despesas: 'dollar-sign',
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
