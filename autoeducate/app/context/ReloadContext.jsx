import { useContext, createContext, useState } from 'react'

const ReloadContext = createContext()

export const ReloadContextProvider = ({ children }) => {
  const [reload, setReload] = useState(false)
  const [reloadch2, setReloadch2] = useState(false)

  const reloadComponent = () => {
    setReload(true)
  }
  const reloadDone = () => {
    setReload(false)
  }

  const reloadComponentch2 = () => {
    setReloadch2(true)
  }
  const reloadDonech2 = () => {
    setReloadch2(false)
  }

  return (
    <ReloadContext.Provider value={{ reload, reloadComponent, reloadDone, reloadch2, reloadComponentch2, reloadDonech2 }}>
      {children}
    </ReloadContext.Provider>
  )
}

export const ReloadState = () => {
  return useContext(ReloadContext)
}
