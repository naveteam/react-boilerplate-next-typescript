import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps
} from 'styled-system'

type StyledSystemProps = SpaceProps & LayoutProps & ColorProps & BorderProps & PositionProps & FlexboxProps

export type RowProps = StyledSystemProps

const RowComponent: React.FC<RowProps> = styled.div<RowProps>(
  { display: 'flex' },
  space,
  layout,
  color,
  border,
  position,
  flexbox
)

export default RowComponent
