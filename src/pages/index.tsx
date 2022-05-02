import { Text } from 'components'
import { useTheme } from 'styled-components'

export default function Home() {
  const { colors } = useTheme()
  return (
    <Text variant='big' color={colors.black}>
      A well-structured production ready Next.js boilerplate with Typescript
    </Text>
  )
}
