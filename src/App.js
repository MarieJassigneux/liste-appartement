import './App.css';
import data from './data/data.json';
import Navbar from './pages/navbar';
import DisplayAppart from './pages/displayAppart';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Navbar />
      <DisplayAppart data={data}/>
      <Footer />
    </div>
  );
}

export default App;
