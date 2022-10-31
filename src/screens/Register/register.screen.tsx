import React, { useReducer, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Alert, Modal } from 'react-native'
import CategorySelect from '../../components/Form/CategorySelect/categorySelect.component'
// import Input from '../../components/Form/Input/input.component'
import InputForm from '../../components/Form/InputForm/inputForm.component'
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

interface IFormData {
  name: string
  preço: string
  state: string
  selectedCategoryValue: string
}

function Register() {
  const [state, dispatch] = useReducer(buttonTypeReducer, initialState)
  const [categoryModal, setCategoryModal] = useState<boolean>(false)
  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState<string>('Categoria')

  const { control, handleSubmit } = useForm<FieldValues, IFormData>({
    defaultValues: {
      name: '',
      preço: '',
    },
  })

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <FormInputsWrapper>
          <InputForm name="name" control={control} placeholder="Nome" />
          <InputForm name="preço" control={control} placeholder="Preço" />

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

        <RegisterButton onPress={handleSubmit(handleRegister)}>
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

  function handleRegister(form: FieldValues) {
    const stateType = (): string => {
      if (state.income) return 'Entrada'
      else return 'Saída'
    }

    const data: IFormData = {
      name: form.name,
      preço: form.preço,
      state: stateType(),
      selectedCategoryValue,
    }

    if (
      data.preço === '' ||
      data.name === '' ||
      selectedCategoryValue === 'Categoria'
    )
      return Alert.alert(
        'Cadastro inválido.',
        'Por favor, preencha todos os campos do formulário.',
      )

    console.log(data)
  }
}

export default Register
