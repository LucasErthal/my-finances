import { useEffect } from 'react';
import CostsPage from './pages/costs'
/* import db from './db'; */

function App() {
  useEffect(() => {
    /* db.loadDatabase(); */
  }, []);

  return (
    <>
      <CostsPage />
    </>
  )
}

export default App
