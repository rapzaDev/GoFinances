import Input from '../../components/Form/Input/input.component'
import { Container, Header, Title, Form } from './register.style'

function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" />

        <Input placeholder="Preço" />
      </Form>
    </Container>
  )
}

export default Register
