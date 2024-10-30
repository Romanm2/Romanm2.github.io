import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './components/MainPage'
import About from './components/About'
import Contact from './components/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
