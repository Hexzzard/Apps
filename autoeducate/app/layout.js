import { AuthContextProvider } from './context/AuthContext'

export const metadata = {
  title: 'Autoeducate',
  description: 'Una pagina para prepararte para la PSU'
}
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <AuthContextProvider>
        <body>{children}</body>
      </AuthContextProvider>
    </html>
  )
}
