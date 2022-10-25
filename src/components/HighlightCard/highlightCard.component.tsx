import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './highlightCard.style'

interface IHighlightCardProps {
  type: 'entradas' | 'saidas' | 'total'
  title: string
  amount: string
  lastTransaction: string
}

const icon = {
  entradas: 'arrow-up-circle',
  saidas: 'arrow-down-circle',
  total: 'dollar-sign',
}

function HighlightCard({
  type,
  title,
  amount,
  lastTransaction,
}: IHighlightCardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon type={type} name={icon[type]} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}

export default HighlightCard
