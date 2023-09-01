import { getQuoteList } from "../api"
import  Quotes  from "./Quotes"

 import { useEffect, useState } from "react"

function QuotesSection(){

  const [quotesList, setQuotesList]= useState([])
  
  useEffect(()=>{
    getQuoteList().then((data)=>{
    
   setQuotesList(data)
     

}).then(()=>{
  
})},[])
    return <>
    <section className="quotes-section">
  <h2 id="quotes-h2">Inspirational quotes</h2>
<Quotes quotesList={quotesList}/>
  </section>
    </>
    }
    
    export default QuotesSection