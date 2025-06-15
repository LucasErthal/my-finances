import { Toaster } from 'sonner'
import { Router } from './routes'

function App() {
  return (
    <>
      <Router />
      <Toaster position="bottom-right" richColors duration={2000} />
    </>
  )
}

export default App
