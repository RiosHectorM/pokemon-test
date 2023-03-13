import './App.css';
import { Routes, Route } from 'react-router-dom';

import Cards from './components/Cards';
import Detail from './components/Detail';
import Error from './components/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
