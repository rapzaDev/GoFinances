import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TextInput`
  height: ${RFValue(56)}px;
  width: 100%;

  padding: 16px 18px;
  margin-bottom: 8px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
