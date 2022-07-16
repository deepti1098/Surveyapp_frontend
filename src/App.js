import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Component/Signup';
import { CssVarsProvider } from '@mui/joy/styles';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>

        </BrowserRouter>
      </CssVarsProvider>

    </div>
  );
}

export default App;
