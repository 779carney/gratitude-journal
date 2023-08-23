
import './App.css';
import GratitudeSection from './components/GratitudeSection';
import Header from './components/Header';
import QuotesSection from './components/QuotesSection';
//import Quotes from './components/QuotesSection';

function App() {
  return (
    <div className="App">
   <Header/>
   <div className='container'>
   <GratitudeSection/>
   <QuotesSection/>
   </div>  
    </div>
  );
}

export default App;
