import { getQuoteList } from "../api"
import  Quotes  from "./Quotes"

 import { useEffect, useState } from "react"

function QuotesSection(){

  const [quotesList, setQuotesList]= useState([])
  
  useEffect(()=>{
    getQuoteList().then((data)=>{
    console.log(data, 'this is data');
   setQuotesList(data)
     console.log(quotesList, 'this is quotes list');

})},[quotesList])
    return <>
    <section className="quotes-section">
  <p> this will contain inspirational quotes</p>
<Quotes/>
  </section>
    </>
    }
    
    export default QuotesSection