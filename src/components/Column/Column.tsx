import Row from 'components/Row'
import { RowProps } from 'components/Row/Row'

type ColumnProps = RowProps

const ColumnComponent: React.FC<ColumnProps> = props => <Row flexDirection='column' {...props} />

export default ColumnComponent
