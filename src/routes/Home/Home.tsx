import { Column, Text } from 'components'

const Home = () => (
  <>
    <Column minHeight='100vh' alignItems='center' justifyContent='center' backgroundColor='rgb(102, 0, 202)'>
      <Text fontSize={72} as='h1' color='#FFF' fontFamily='system-ui'>
        Nave.rs
      </Text>
      <Text variant='big' color='#FFF' fontFamily='system-ui' textAlign='center'>
        A boilerplate with React, NextJs and TypeScript create by Nave team
      </Text>
    </Column>
  </>
)

export default Home
