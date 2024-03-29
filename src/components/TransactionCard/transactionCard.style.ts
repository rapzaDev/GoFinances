import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

type TypeProps = {
  type: 'entrada' | 'saida'
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: ${RFValue(16)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  margin-top: 2px;

  color: ${({ type, theme }) =>
    type === 'entrada'
      ? `${theme.colors.success}`
      : `${theme.colors.attention}`};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(19)}px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.text};

  margin-right: ${RFValue(17)}px;
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`
