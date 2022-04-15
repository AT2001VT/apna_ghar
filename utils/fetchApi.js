import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



  export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'dd02be4371msh58866428744e12bp13fa3ajsn243ef56f5d01'
          },
    });
      
    return data;
  }