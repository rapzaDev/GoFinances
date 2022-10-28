import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  changeBackgroundStyle,
  IconProps,
  borderStyle,
  IButtonProps,
} from './transactionTypeButton.style.functions'

export const ButtonContainer = styled.TouchableOpacity<IButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border-width: 1px;

  padding: ${RFValue(18)}px ${RFValue(32.5)}px;
  margin-right: 8px;

  ${({ type, active, theme }) =>
    active && changeBackgroundStyle({ type }, theme)};

  ${({ type, theme }) => borderStyle({ type }, theme)};

  opacity: ${({ active }) => (active ? '1' : '0.6')};
`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;

  margin-right: 14px;

  color: ${({ type, theme }) =>
    type === 'Entrada'
      ? `${theme.colors.success}`
      : `${theme.colors.attention}`};
`

export const Title = styled.Text<IButtonProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.title};
`
