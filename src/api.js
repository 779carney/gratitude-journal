import axios from "axios";

// const quotesApi = axios.create({
//     baseURL: `https://zenquotes.io/api`,
// });


export const getQuoteList = () => {
    return axios.get(`https://zenquotes.io/api/quotes`,  { timeout: 10000000 }).then(({data}) => {
       return data
        
    }).catch(err => {
        console.log(err);
      });
}


// const api_url ="https://zenquotes.io/api/quotes/";

// export async function getApi(url)
// {
//   const response = await fetch(url);
//   const  data = await response.json();
//   console.log(data);
// }

// getApi(api_url);