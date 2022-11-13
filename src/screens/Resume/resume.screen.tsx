import HistoryCard from '../../components/HistoryCard/historyCard.component'
import { Container, Header, Title, Content } from './resume.style'
import { loadData, ResumeDataType } from './functions/resume.screen.functions'
import { useEffect, useState } from 'react'

export default function Resume() {
  const [data, setData] = useState<ResumeDataType[]>([])
  useEffect(() => {
    loadData(setData)
  }, [])

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>{renderCategoriesList()}</Content>
    </Container>
  )

  function renderCategoriesList() {
    return data.map((it) => {
      const amountFormat = `R$ ${it.total},00`

      return (
        <HistoryCard
          key={`${it.categoria + it.total}`}
          title={it.categoria}
          amount={amountFormat}
          color={it.color}
        />
      )
    })
  }
}
