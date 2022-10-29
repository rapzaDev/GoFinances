import React, { useReducer, useState } from 'react'
import { Modal } from 'react-native'
import CategorySelect from '../../components/Form/CategorySelect/categorySelect.component'
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
  SelectCategoryField,
  CategoryText,
  Icon,
  RegisterButton,
  RegisterButtonTitle,
} from './register.style'

function Register() {
  const [state, dispatch] = useReducer(buttonTypeReducer, initialState)
  const [categoryModal, setCategoryModal] = useState<boolean>(false)
  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState<string>('Categoria')

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

          <SelectCategoryField onPress={changeModalState}>
            <CategoryText>{selectedCategoryValue}</CategoryText>
            <Icon name="keyboard-arrow-down" />
          </SelectCategoryField>
        </FormInputsWrapper>

        <RegisterButton>
          <RegisterButtonTitle>Cadastrar</RegisterButtonTitle>
        </RegisterButton>
      </Form>

      <Modal visible={categoryModal}>
        <CategorySelect
          changeModalState={changeModalState}
          registerSelectedCategory={registerSelectedCategory}
        />
      </Modal>
    </Container>
  )

  function changeModalState() {
    setCategoryModal((prev) => !prev)
  }

  function registerSelectedCategory(categorySelected: string) {
    setSelectedCategoryValue(categorySelected)
    changeModalState()
  }
}

export default Register
