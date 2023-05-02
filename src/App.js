import './App.css';
import NavBar from './Components/Nav/index.js'
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
