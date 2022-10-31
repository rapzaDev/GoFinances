import { TextInputProps } from 'react-native'
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form'
import Input from '../Input/input.component'
import { Container, Error } from './inputForm.style'

interface IInputFormProps extends TextInputProps {
  control: Control
  name: string
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | string
}

function InputForm({ control, name, error, ...rest }: IInputFormProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export default InputForm
