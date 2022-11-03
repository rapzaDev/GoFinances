import React, { useReducer, useState } from 'react'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import uuid from 'react-native-uuid'
// HOOKS
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  useForm,
} from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
// COMPONENTES
import CategorySelect from '../../components/Form/CategorySelect/categorySelect.component'
import InputForm from '../../components/Form/InputForm/inputForm.component'
import TransactionButtonType from '../../components/Form/TransactionTypeButton/transactionTypeButton.component'
// REDUCER
import {
  buttonTypeReducer,
  initialState,
} from '../../utils/Reducer/registerReducer'
// yup
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IFormData {
  id: string
  title: string
  amount: string
  type: string
  category: string
  date: any
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Nome é obrigatório'),
    preço: yup
      .number()
      .typeError('Preço é obrigatório')
      .positive('O valor não pode ser negativo'),
  })
  .required()

function Register() {
  const [state, dispatch] = useReducer(buttonTypeReducer, initialState)
  const [categoryModal, setCategoryModal] = useState<boolean>(false)
  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState<string>('Categoria')

  const { navigate } = useNavigation<any>()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues, IFormData>({
    defaultValues: {
      name: '',
      preço: '',
    },
    resolver: yupResolver(schema),
  })

  const showErrorMessageIfExists = (
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
  ) => {
    if (error === undefined) return ''

    return error.message
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <FormInputsWrapper>
            <InputForm
              error={showErrorMessageIfExists(errors.name)}
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              keyboardType="decimal-pad"
              error={showErrorMessageIfExists(errors.preço)}
              name="preço"
              control={control}
              placeholder="Preço"
            />

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
    </TouchableWithoutFeedback>
  )

  function changeModalState() {
    setCategoryModal((prev) => !prev)
  }

  function registerSelectedCategory(categorySelected: string) {
    setSelectedCategoryValue(categorySelected)
    changeModalState()
  }

  async function handleRegister(form: FieldValues) {
    if (form.name === '')
      return Alert.alert('Cadastro inválido.', 'Informe o nome da transação.')

    if (form.preço === '')
      return Alert.alert(
        'Cadastro inválido.',
        'Informe o valor do preço da transação.',
      )

    if (selectedCategoryValue === 'Categoria')
      return Alert.alert(
        'Cadastro inválido.',
        'Selecione uma categoria para a transação.',
      )

    const newTransaction: IFormData = {
      id: String(uuid.v4()),
      title: form.name,
      amount: form.preço,
      type: state.income ? 'entrada' : 'saida',
      category: selectedCategoryValue,
      date: new Date(),
    }

    // salvando no async storage
    try {
      const dataKey = '@gofinances:transactions'

      const storageData = await AsyncStorage.getItem(dataKey)
      let currentStorageData: IFormData[] = storageData
        ? JSON.parse(storageData)
        : []

      currentStorageData = Object.values(currentStorageData)

      const dataFormatted = [...currentStorageData, newTransaction]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset()
      setSelectedCategoryValue('Categoria')

      navigate('Listagem')
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel cadastrar')
    }
  }
}

export default Register
