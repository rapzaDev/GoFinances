import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

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
  justify-content: space-between;

  width: 100%;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.background};
`

export const FormInputsWrapper = styled.View``

export const TransactionsTypesWrapper = styled.View`
  flex-direction: row;
  width: 100%;

  margin-top: 8px;
  margin-bottom: 16px;
`

export const SelectCategoryField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${RFValue(56)}px;
  width: 100%;

  padding: 18px 16px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
`

export const CategoryText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(22)}px;

  color: ${({ theme }) => theme.colors.text};
`

export const RegisterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: ${RFValue(56)}px;
  width: 100%;

  padding: 16px 0;
  margin-bottom: ${RFValue(24)}px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const RegisterButtonTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.shape};
`
