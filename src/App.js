import Button from './Button'
// import logo from './logo.svg';
import './App.css';
import { FaGlobeAmericas } from 'react-icons/fa';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <FaGlobeAmericas className="App-logo" />
       
        <h1 id = "header" >Where do you want to go?</h1>
  
        <p>
        </p>
        <span><img src="https://shorturl.at/orE58" width={450} height={250} alt="Paris" />
        </span>
                <a
        
          className="App-link"
          href="Paris.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button message='Paris' />
        </a>

        <span>
          <img src="https://shorturl.at/bxEJQ" width={450} height={250} alt="Milan" />
        </span>

        {/* <a
          
          className="App-link2"
          href="Milan.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button2 message='Milan' /> */}

{/* 
        </a>
         */}
      </header>
    </div>
  );
}

export default App;
