import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonContainer, Icon, Title } from './transactionTypeButton.style'

interface ITransactionButtonTypeProps extends TouchableOpacityProps {
  type: 'Entrada' | 'Saida'
  active: boolean
}

const icon = {
  Entrada: 'arrow-up-circle',
  Saida: 'arrow-down-circle',
}

const name = {
  Entrada: 'Entrada',
  Saida: 'Saída',
}

function TransactionButtonType({
  type,
  active,
  ...rest
}: ITransactionButtonTypeProps) {
  return (
    <ButtonContainer {...rest} type={type} active={active}>
      <Icon active={active} type={type} name={icon[type]} />
      <Title active={active}>{name[type]}</Title>
    </ButtonContainer>
  )
}

export default TransactionButtonType
