import HighlightCard from '../../components/HighlightCard/highlightCard.component'

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
} from './dashboard.style'

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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </CardsList>
    </Container>
  )
}

export default Dashboard
