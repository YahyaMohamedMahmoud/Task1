import { useEffect, useState } from "react";

const FetchingData = () => {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try{
            const response = await fetch("https://dummyjson.com/products");
            const {products} = await response.json();
            setData(products);
            setLoading(false);
        }
        catch(error:any){
            console.log(error);
            
        }
    };
  
    useEffect(()=>{
      fetchData();
    },[]);

  return {data , loading};
}

export default FetchingData