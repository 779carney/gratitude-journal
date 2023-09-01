import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft}from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
function Quotes({quotesList}){
    const [count, setCount]= useState(0)
    const handleNext = () => {
        if (count < quotesList.length - 1) {
          setCount(count + 1);
        }
      };
    
      const handlePrevious = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    
    return<>

    {quotesList.map((quote, index) => {
        if (index === count) {
          return <div key={index} className='quote'>
            <p className='quote-1'>{quote.a}</p>
            <p className='quote-1'>{quote.q}</p>
           
            </div>;
        }
        return null;
      })}
    <button onClick={handlePrevious} className='arrow-button'>
  <FontAwesomeIcon icon={faArrowLeft} />
</button>
<button onClick={handleNext} className='arrow-button'>
  <FontAwesomeIcon icon={faArrowRight} />
</button>
    </>
}
//*you have ran out of requests for your api 
//? you have got the quotes working but now making another component it has broken saying quotes not found .....
//* anyway your next move was to create a next a nd back button showing connected to a count which the count was the index so will only show that quote 

export default Quotes
