import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from './Components/Pages/ResultPage';
import MainPage from './Components/Pages/MainPage.jsx/MainPage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="/result" element={<Result/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
