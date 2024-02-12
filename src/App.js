import { Route, Routes } from 'react-router-dom';
import Tests from './components/Tasks';
import Feature from './components/Feature';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tests />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </div>
  );
}

export default App;
