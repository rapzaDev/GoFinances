import { css, DefaultTheme } from 'styled-components/native'

export type IconProps = {
  type: 'Entrada' | 'Saida'
}

export interface IButtonProps extends IconProps {
  active: boolean
}

export const changeBackgroundStyle = (
  { type }: IconProps,
  theme: DefaultTheme,
) => {
  switch (type) {
    case 'Entrada':
      return css`
        background-color: ${theme.colors.success_light};
      `
    case 'Saida':
      return css`
        background-color: ${theme.colors.attention_light};
      `
    default:
      break
  }
}

export const borderStyle = ({ type }: IconProps, theme: DefaultTheme) => {
  if (type === 'Entrada')
    return css`
      border-color: ${theme.colors.success_light};
    `
  else
    return css`
      border-color: ${theme.colors.attention_light};
    `
}
