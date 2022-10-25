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

function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de app</Title>
      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>

        <Date>25/10/2022</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard
