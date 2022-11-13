import { Container, Title, Amount } from './historyCard.style'

interface IHistoryCardProps {
  color: string
  title: string
  amount: string
}

export default function HistoryCard({
  color,
  title,
  amount,
}: IHistoryCardProps) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}
