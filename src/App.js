import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Announcment from './Components/Announcment/Announcment';
import Slider from './Components/Slider/Slider';
import Categories from './Components/Categories /Categories';
import Products from './Components/Products/Products';
import Newsletter from './Newsletter/Newsletter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  );
}

export default App;
