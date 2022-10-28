export type CategorySelectDataType = {
  key: number
  icon: 'shopping-bag' | 'coffee' | 'dollar-sign' | 'heart' | 'book'
  category: 'Compras' | 'Alimentação' | 'Salário' | 'Lazer' | 'Estudos'
}

export const categorySelectData: CategorySelectDataType[] = [
  {
    key: 0,
    icon: 'shopping-bag',
    category: 'Compras',
  },
  {
    key: 1,
    icon: 'coffee',
    category: 'Alimentação',
  },
  {
    key: 2,
    icon: 'dollar-sign',
    category: 'Salário',
  },
  {
    key: 3,
    icon: 'heart',
    category: 'Lazer',
  },
  {
    key: 4,
    icon: 'book',
    category: 'Estudos',
  },
]
