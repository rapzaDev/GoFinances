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
} from './dashboard.styles'

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
    </Container>
  )
}

export default Dashboard
