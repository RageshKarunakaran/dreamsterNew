import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Claim from './components/claim';

function App() {
  return (
    <div className="App">
      <main className=''>
        <Home/>
        <Claim/>
      </main>
    </div>
  );
}

export default App;
