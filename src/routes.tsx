import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/home';
import CostsPage from './pages/costs';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-cost" element={<CostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}