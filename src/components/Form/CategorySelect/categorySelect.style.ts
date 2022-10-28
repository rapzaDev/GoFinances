import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  /* justify-content: center; */

  height: ${RFPercentage(16.7)}px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  padding-left: ${RFPercentage(20)}px;
`

export const Title = styled.Text`
  margin-bottom: ${RFValue(19)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(34)}px;

  margin-bottom: ${RFValue(19)}px;

  color: ${({ theme }) => theme.colors.shape};

  margin-left: ${RFPercentage(14)}px;
`
