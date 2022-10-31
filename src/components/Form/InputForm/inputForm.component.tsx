import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import Input from '../Input/input.component'
import { Container } from './inputForm.style'

interface IInputFormProps extends TextInputProps {
  control: Control
  name: string
}

function InputForm({ control, name, ...rest }: IInputFormProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
    </Container>
  )
}

export default InputForm
