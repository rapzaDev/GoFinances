import React, { useState } from 'react'
import { categorySelectData } from '../../../utils/CategorySelectData/categorySelectData'
import { CategoryType } from './Category/category.component'

import {
  renderCategories,
  renderFinishButton,
} from './functions/categorySelect.component.functions'

import {
  Container,
  Header,
  Title,
  Icon,
  CategoriesWrapper,
  ListCategories,
} from './categorySelect.style'

interface ICategorySelectProps {
  changeModalState: () => void
  registerSelectedCategory: (categorySelected: string) => void
}

function CategorySelect({
  changeModalState,
  registerSelectedCategory,
}: ICategorySelectProps) {
  const [categorySelected, setCategorySelected] = useState<CategoryType>('')

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
        <Icon name="x" onPress={changeModalState} />
      </Header>

      <CategoriesWrapper>
        <ListCategories>
          {renderCategories(
            categorySelectData,
            categorySelected,
            selectCategoryOnPress,
          )}
        </ListCategories>

        {renderFinishButton(categorySelected, registerSelectedCategory)}
      </CategoriesWrapper>
    </Container>
  )

  function selectCategoryOnPress(selectedCategory: CategoryType) {
    setCategorySelected(selectedCategory)
  }
}

export default CategorySelect
