import React, { useState } from 'react'
import {
  categorySelectData,
  CategorySelectDataType,
} from '../../../utils/CategorySelectData/categorySelectData'

import {
  Container,
  Header,
  Title,
  Icon,
  CategoriesWrapper,
  ListCategories,
  FinishButton,
  FinishText,
  CategorySelected,
  CheckCategory,
  CategoryInfo,
  CategoryIcon,
  CategoryName,
  FakeFinishButton,
} from './categorySelect.style'

interface ICategoryProps {
  icon: string
  category: 'Compras' | 'Alimentação' | 'Salário' | 'Lazer' | 'Estudos' | ''
  isSelected: boolean
  selectCategoryOnPress: (
    selectedCategory:
      | 'Compras'
      | 'Alimentação'
      | 'Salário'
      | 'Lazer'
      | 'Estudos'
      | '',
  ) => void
}

function Category({
  icon,
  category,
  isSelected,
  selectCategoryOnPress,
}: ICategoryProps) {
  return (
    <CategorySelected
      icon_color={icon}
      isSelected={isSelected}
      onPress={() => selectCategoryOnPress(category)}
    >
      <CheckCategory isSelected={isSelected} icon_color={icon} />

      <CategoryInfo>
        <CategoryIcon icon_color={icon} isSelected={isSelected} name={icon} />
        <CategoryName icon_color={icon} isSelected={isSelected}>
          {category}
        </CategoryName>
      </CategoryInfo>
    </CategorySelected>
  )
}

function renderCategories(
  categories: CategorySelectDataType[],
  categoryType:
    | 'Compras'
    | 'Alimentação'
    | 'Salário'
    | 'Lazer'
    | 'Estudos'
    | '',
  selectCategoryOnPress: (
    selectedCategory:
      | 'Compras'
      | 'Alimentação'
      | 'Salário'
      | 'Lazer'
      | 'Estudos'
      | '',
  ) => void,
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

function renderFinishButton(
  categorySelected:
    | 'Compras'
    | 'Alimentação'
    | 'Salário'
    | 'Lazer'
    | 'Estudos'
    | '',
) {
  if (categorySelected !== '')
    return (
      <FinishButton>
        <FinishText>Finalizar</FinishText>
      </FinishButton>
    )

  return (
    <FakeFinishButton>
      <FinishText>Finalizar</FinishText>
    </FakeFinishButton>
  )
}

function CategorySelect() {
  const [categorySelected, setCategorySelected] = useState<
    'Compras' | 'Alimentação' | 'Salário' | 'Lazer' | 'Estudos' | ''
  >('')

  function selectCategoryOnPress(
    selectedCategory:
      | 'Compras'
      | 'Alimentação'
      | 'Salário'
      | 'Lazer'
      | 'Estudos'
      | '',
  ) {
    setCategorySelected(selectedCategory)
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
        <Icon name="x" />
      </Header>

      <CategoriesWrapper>
        <ListCategories>
          {renderCategories(
            categorySelectData,
            categorySelected,
            selectCategoryOnPress,
          )}
        </ListCategories>

        {renderFinishButton(categorySelected)}
      </CategoriesWrapper>
    </Container>
  )
}

export default CategorySelect
