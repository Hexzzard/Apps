import { useContext, createContext, useState } from 'react'

const ReloadContext = createContext()

export const ReloadContextProvider = ({ children }) => {
  const [reload, setReload] = useState(false)

  const reloadComponent = () => {
    setReload(true)
  }
  const reloadDone = () => {
    setReload(false)
  }

  return (
    <ReloadContext.Provider value={{ reload, reloadComponent, reloadDone }}>
      {children}
    </ReloadContext.Provider>
  )
}

export const ReloadState = () => {
  return useContext(ReloadContext)
}
