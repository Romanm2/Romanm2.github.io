import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './components/MainPage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <MainPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
