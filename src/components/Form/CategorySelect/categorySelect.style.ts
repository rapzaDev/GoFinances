/* eslint-disable camelcase */
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { getIconColor } from './functions/categorySelect.style.functions'

type CategoryIsSelectedProps = {
  isSelected: boolean
  icon_color: 'shopping-bag' | 'coffee' | 'dollar-sign' | 'heart' | 'book'
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;

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

export const CategoriesWrapper = styled.View`
  flex: 1;
  padding: 38px 24px 24px;
`

export const ListCategories = styled.ScrollView``

export const FakeFinishButton = styled.View<CategoryIsSelectedProps>`
  align-items: center;
  justify-content: center;

  height: ${RFValue(56)}px;
  width: 100%;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.text};
`

export const FinishButton = styled.TouchableOpacity<CategoryIsSelectedProps>`
  align-items: center;
  justify-content: center;

  height: ${RFValue(56)}px;
  width: 100%;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const FinishText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.shape};
`

export const CategorySelected = styled.TouchableOpacity<CategoryIsSelectedProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(18)}px;
  padding-right: ${RFValue(30)}px;
  margin-bottom: 16px;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};

  border-bottom-color: ${({ icon_color, theme, isSelected }) =>
    isSelected ? getIconColor(icon_color, theme) : `${theme.colors.text}`};

  border-radius: 8px;
  border-bottom-width: 3px;
`

export const CheckCategory = styled.View<CategoryIsSelectedProps>`
  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;

  border-radius: 999px;
  border-width: 1px;
  border-color: ${({ icon_color, theme, isSelected }) =>
    isSelected ? getIconColor(icon_color, theme) : `${theme.colors.text}`};

  background-color: ${({ icon_color, theme, isSelected }) =>
    isSelected
      ? getIconColor(icon_color, theme)
      : `${theme.colors.background}`};
`

export const CategoryInfo = styled.View`
  flex-direction: row;
  align-items: flex-start;

  margin-top: ${RFPercentage(0.7)}px;
`

export const CategoryIcon = styled(Feather)<CategoryIsSelectedProps>`
  font-size: ${RFValue(20)}px;

  margin-right: 8px;

  color: ${({ icon_color, theme, isSelected }) =>
    isSelected ? getIconColor(icon_color, theme) : `${theme.colors.text}`};
`

export const CategoryName = styled.Text<CategoryIsSelectedProps>`
  font-size: ${RFValue(16)}px;

  font-family: ${({ isSelected, theme }) =>
    isSelected ? theme.fonts.medium : theme.fonts.regular};

  color: ${({ icon_color, theme, isSelected }) =>
    isSelected ? getIconColor(icon_color, theme) : `${theme.colors.text}`};
`
