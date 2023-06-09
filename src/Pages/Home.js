import Button from '../Button'
// import logo from './logo.svg';
import '../App.css';
import { FaGlobeAmericas } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Like from '../Like';


function Home() {
  return (
    
      <div className="App">
        <header className="App-header">
          <FaGlobeAmericas className="App-logo" />


          <h1 id="header" >Where do you want to go?</h1>
        </header>

        <div className='container'>

          <img src="https://shorturl.at/orE58" width={450} height={250} alt="Paris" />
          <img src="https://shorturl.at/bxEJQ" width={450} height={250} alt="Milan" />
          <img src="https://shorturl.at/stBM8" width={450} height={250} alt="Barcelona" />

        </div>

        <div className="buttons">
          
          
          <Link to="/Paris">  
          < Button message='Paris' /> 
          </Link>
          
          <Like/>
         
          <a
            className="App-link"
            href="Milan.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button message='Milan' />
          </a>

          <a

            className="App-link"
            href="Barcelona.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button message='Barcelona' />
          </a>
        </div>


       
      

      </div>
    
  );
}

export default Home;
