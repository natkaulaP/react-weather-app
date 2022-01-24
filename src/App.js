import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Krakow"/>
        <footer>
          <a
            href="https://github.com/natkaulaP/vanilla"
            target="_blank"
            class="contact"
            rel="noreferrer"
          >
            Open-source code by <span class="label">Urszula Paruch</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
