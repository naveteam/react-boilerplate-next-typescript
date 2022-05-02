import { ReactNode } from 'react'

type LoaderProps = {
  children: ReactNode
}
const Loader = ({ children = 'Carregando...' }: LoaderProps) => <p>{children}</p>

export default Loader
