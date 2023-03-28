import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home'
import Idopont from './Idopont';
import Tapasztalat from './Tapasztalat';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='idopont' element={<Idopont/>}/>
          <Route path='tapasztalat' element={<Tapasztalat/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.render(<App />,  document.getElementById('root'))