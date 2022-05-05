import { ElementType } from 'react'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant
} from 'styled-system'

type StyledSystemProps = SpaceProps & LayoutProps & TypographyProps & ColorProps & PositionProps

type TextVariants = {
  big: 'big'
  medium: 'medium'
  regular: 'regular'
  small: 'small'
  tiny: 'tiny'
}

type TextProps = StyledSystemProps & {
  variant?: keyof TextVariants
  as?: ElementType | 'p'
}

const TextComponent: React.FC<TextProps> = styled.p(
  variant({
    variants: {
      big: {
        fontSize: 24,
        lineHeight: '29px'
      },
      medium: {
        fontSize: 20,
        lineHeight: '24px'
      },
      regular: {
        fontSize: 16,
        lineHeight: '25px'
      },
      small: {
        fontSize: 14,
        lineHeight: '17px'
      },
      tiny: {
        fontSize: 12,
        lineHeight: '17px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)

export default TextComponent
