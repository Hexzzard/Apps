'use client'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter as Router } from 'react-router-dom'

export const metadata = {
  title: 'Autoeducate',
  description: 'Una pagina para prepararte para la PSU'
}
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthContextProvider>
          <Router>
            {children}
          </Router>
        </AuthContextProvider>
      </body>
    </html>
  )
}
