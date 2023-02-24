import './App.css';
import Countries from './components/Countries';
import CountriesDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Countries />

      <div className="container">
        <Routes>
          <Route path="/" element={<CountriesList countries={Countries} />}> </Route>
          <Route path="/:countryCode" element={<CountriesDetails countries={Countries} />}></Route>
        </Routes>
      </div>



    </div>
  );
}

export default App;
