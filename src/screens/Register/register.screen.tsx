import React, { useReducer } from 'react'
import Input from '../../components/Form/Input/input.component'
import TransactionButtonType from '../../components/Form/TransactionTypeButton/transactionTypeButton.component'
import {
  buttonTypeReducer,
  initialState,
} from '../../utils/Reducer/registerReducer'

import {
  Container,
  Header,
  Title,
  Form,
  FormInputsWrapper,
  TransactionsTypesWrapper,
  RegisterButton,
  RegisterButtonTitle,
} from './register.style'

function Register() {
  const [state, dispatch] = useReducer(buttonTypeReducer, initialState)

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <FormInputsWrapper>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsTypesWrapper>
            <TransactionButtonType
              type="Entrada"
              active={state.income}
              onPress={() => {
                dispatch({
                  type: 'INCOME',
                })
              }}
            />
            <TransactionButtonType
              type="Saida"
              active={state.outcome}
              onPress={() => {
                dispatch({
                  type: 'OUTCOME',
                })
              }}
            />
          </TransactionsTypesWrapper>
        </FormInputsWrapper>

        <RegisterButton>
          <RegisterButtonTitle>Cadastrar</RegisterButtonTitle>
        </RegisterButton>
      </Form>
    </Container>
  )
}

export default Register
