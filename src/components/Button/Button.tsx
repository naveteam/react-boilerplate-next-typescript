import { ReactNode } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type StyledSystemProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  BorderProps &
  PositionProps &
  ColorProps & {
    children: ReactNode
  }

type ButtonProps = StyledSystemProps & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

const ButtonComponent = ({ children, ...props }: ButtonProps) => <Button {...props}>{children}</Button>

const Button: React.FC<ButtonProps> = styled.button`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${typography}
  ${position}
`

export default ButtonComponent
