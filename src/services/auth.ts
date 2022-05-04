import client from 'providers/fetchClient'

export type GetUserProps = {
  id: string
  name: string
  email: string
}

export type SignInProps = {
  email: string
  password: string
}

export const getUser = () => client.get<GetUserProps>('/v1/me')

export const login = (data: SignInProps) => client.post<SignInProps>('/v1/users/login', data)
