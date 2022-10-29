import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import {
  IconColorsType,
  getIconColor,
} from './functions/category.style.functions'

type CategoryIsSelectedProps = {
  isSelected: boolean
  iconColor: IconColorsType
}

export const Container = styled.TouchableOpacity<CategoryIsSelectedProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(18)}px;
  padding-right: ${RFValue(30)}px;
  margin-bottom: 16px;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};

  border-bottom-color: ${({ iconColor, theme, isSelected }) =>
    isSelected ? getIconColor(iconColor, theme) : `${theme.colors.text}`};

  border-radius: 8px;
  border-bottom-width: 3px;
`

export const CheckCategory = styled.View<CategoryIsSelectedProps>`
  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;

  border-radius: 999px;
  border-width: 1px;
  border-color: ${({ iconColor, theme, isSelected }) =>
    isSelected ? getIconColor(iconColor, theme) : `${theme.colors.text}`};

  background-color: ${({ iconColor, theme, isSelected }) =>
    isSelected ? getIconColor(iconColor, theme) : `${theme.colors.background}`};
`

export const CategoryInfo = styled.View`
  flex-direction: row;
  align-items: flex-start;

  margin-top: ${RFPercentage(0.7)}px;
`

export const CategoryIcon = styled(Feather)<CategoryIsSelectedProps>`
  font-size: ${RFValue(20)}px;

  margin-right: 8px;

  color: ${({ iconColor, theme, isSelected }) =>
    isSelected ? getIconColor(iconColor, theme) : `${theme.colors.text}`};
`

export const CategoryName = styled.Text<CategoryIsSelectedProps>`
  font-size: ${RFValue(16)}px;

  font-family: ${({ isSelected, theme }) =>
    isSelected ? theme.fonts.medium : theme.fonts.regular};

  color: ${({ iconColor, theme, isSelected }) =>
    isSelected ? getIconColor(iconColor, theme) : `${theme.colors.text}`};
`
