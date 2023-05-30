import axios from "axios";
import { useEffect, useState } from "react";
import {RAPID_API_KEY} from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [ata, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
      };

      const fetchData = async () => {
        setIsLoading(true);
        
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
      
}