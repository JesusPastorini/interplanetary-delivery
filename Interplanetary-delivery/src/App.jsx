import { Routes, Route } from 'react-router-dom';
import RegisterAddress from './pages/RegisterAddress';
import EditAddress from './pages/EditAddress';

function App() {
  return (
    <div className="h-screen bg-gray-300 flex h-screen items-center justify-center mx-auto px-6">
      <Routes>
        <Route path="/edit-address/:id" element={<EditAddress />} />
        <Route path="/" element={<RegisterAddress />} />
      </Routes>
    </div>
  )
}

export default App
