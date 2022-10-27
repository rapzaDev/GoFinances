import { TextInputProps } from 'react-native'
import { Container } from './input.style'

function Input({ ...rest }: TextInputProps) {
  return <Container {...rest}></Container>
}

export default Input
