import axios from 'axios';
export const getDataFn = async (link) => {
   return await axios
   .get(link)
   .then(response=>{
       return response.data;
   })
}

export const getTrailerFn = async (link) => {
    return await axios
    .get(link)
    .then(response=>{
        return response;
    })
 }