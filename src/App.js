
import './App.css';
import Countries from './components/Countries/Countries';




function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, []);

//   return (
//     <div>
//       <h1>Travelling around the World!!! </h1>
//       <h3>Countries Available: {countries.length}</h3>
//       {
//         countries.map(country =>
//           <Country name={country.name} capital={country.capital}></Country>

//         )
//       }

//     </div>
//   );
// }
// function Country(props) {

//   return (
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h4>Capital: {props.capital}</h4>
//     </div>
//   )
// }



export default App;
