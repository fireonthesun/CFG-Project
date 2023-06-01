import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Paris from './Pages/Paris';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Paris' element={<Paris />} />
    </Routes>
  );
}

export default App;