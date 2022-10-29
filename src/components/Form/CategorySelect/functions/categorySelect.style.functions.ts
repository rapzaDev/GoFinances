import { css, DefaultTheme } from 'styled-components/native'

export const getIconColor = (
  icon: 'shopping-bag' | 'coffee' | 'dollar-sign' | 'heart' | 'book',
  theme: DefaultTheme,
) => {
  switch (icon) {
    case 'shopping-bag':
      return css`
        ${theme.color_icons.shopping_bag};
      `
    case 'coffee':
      return css`
        ${theme.color_icons.coffee};
      `
    case 'dollar-sign':
      return css`
        ${theme.color_icons.dollar_sign};
      `
    case 'heart':
      return css`
        ${theme.color_icons.heart};
      `

    case 'book':
      return css`
        ${theme.color_icons.book};
      `
    default:
      break
  }
}
