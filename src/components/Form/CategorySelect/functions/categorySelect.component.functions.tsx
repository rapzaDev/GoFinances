import React from 'react'
import { CategorySelectDataType } from '../../../../utils/CategorySelectData/categorySelectData'
import Category, { CategoryType } from '../Category/category.component'
import {
  FakeFinishButton,
  FinishButton,
  FinishText,
} from '../categorySelect.style'

export function renderCategories(
  categories: CategorySelectDataType[],
  categoryType: CategoryType,
  selectCategoryOnPress: (selectedCategory: CategoryType) => void,
) {
  return categories.map((target) => {
    const { key, icon, category } = target

    const isSelected: boolean = category === categoryType

    return (
      <Category
        key={key}
        icon={icon}
        category={category}
        isSelected={isSelected}
        selectCategoryOnPress={selectCategoryOnPress}
      />
    )
  })
}

export function renderFinishButton(
  categorySelected: CategoryType,
  registerSelectedCategory: (categorySelected: string) => void,
) {
  if (categorySelected !== '')
    return (
      <FinishButton onPress={() => registerSelectedCategory(categorySelected)}>
        <FinishText>Selecionar</FinishText>
      </FinishButton>
    )

  return (
    <FakeFinishButton>
      <FinishText>Selecionar</FinishText>
    </FakeFinishButton>
  )
}
