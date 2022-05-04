import React, { createContext, useContext, useState } from 'react'

export type UserProps = {
  name: string
  email: string
}

export type UserContextProps = {
  user: UserProps
  setUser: (values: object) => void
}

const UserContext = createContext({} as UserContextProps)

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

const UserProvider: React.FC = props => {
  const [user, setUser] = useState<UserProps | null>(null)

  return <UserContext.Provider value={{ user, setUser }} {...props} />
}

export { UserProvider, useUser }
