import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFPercentage(16.7)}px;

  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${getStatusBarHeight() + RFValue(37)}px;
`

export const Form = styled.View`
  flex: 1;
  width: 100%;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.background};
`
