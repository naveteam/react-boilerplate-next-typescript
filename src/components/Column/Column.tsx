import { Row } from 'components'
import { RowProps } from 'components/Row/Row'

const ColumnComponent: React.FC<RowProps> = props => <Row flexDirection='column' {...props} />

export default ColumnComponent
