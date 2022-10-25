import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

type TypeProps = {
  type: 'entradas' | 'saidas' | 'total'
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ type, theme }) =>
    type === 'total' ? `${theme.colors.secondary}` : `${theme.colors.shape}`};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-left: ${RFValue(8)}px;
`

// HEADER

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ type, theme }) =>
    type === 'total' ? `${theme.colors.shape}` : `${theme.colors.text_dark}`};
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type, theme }) =>
    type === 'entradas' &&
    css`
      color: ${theme.colors.success};
    `}

  ${({ type, theme }) =>
    type === 'saidas' &&
    css`
      color: ${theme.colors.attention};
    `}

  ${({ type, theme }) =>
    type === 'total' &&
    css`
      color: ${theme.colors.shape};
    `}
`

// FOOTER

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  margin-top: ${RFValue(38)}px;

  color: ${({ type, theme }) =>
    type === 'total' ? `${theme.colors.shape}` : `${theme.colors.text_dark}`};
`

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ type, theme }) =>
    type === 'total' ? `${theme.colors.shape}` : `${theme.colors.text}`};
`
