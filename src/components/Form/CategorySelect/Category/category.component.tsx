import {
  Container,
  CheckCategory,
  CategoryInfo,
  CategoryIcon,
  CategoryName,
} from './category.style'

export type CategoryType =
  | 'Compras'
  | 'Alimentação'
  | 'Salário'
  | 'Lazer'
  | 'Estudos'
  | ''

interface ICategoryProps {
  icon: string
  category: CategoryType
  isSelected: boolean
  selectCategoryOnPress: (selectedCategory: CategoryType) => void
}

function Category({
  icon,
  category,
  isSelected,
  selectCategoryOnPress,
}: ICategoryProps) {
  console.log(`${category}`, icon)

  return (
    <Container
      iconColor={icon}
      isSelected={isSelected}
      onPress={() => selectCategoryOnPress(category)}
    >
      <CheckCategory isSelected={isSelected} iconColor={icon} />

      <CategoryInfo>
        <CategoryIcon iconColor={icon} isSelected={isSelected} name={icon} />
        <CategoryName iconColor={icon} isSelected={isSelected}>
          {category}
        </CategoryName>
      </CategoryInfo>
    </Container>
  )
}

export default Category
