import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Krakow" />
        <footer className="link">
          <a
            href="https://github.com/natkaulaP/react-weather-app"
            target="_blank"
            className="contact"
            rel="noreferrer"
          >
            Open-source code by <span className="label ">Urszula Paruch</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
