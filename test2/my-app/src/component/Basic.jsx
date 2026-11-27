import { useEffect,useState } from "react";
function Basic(){
    const [data, setData] = useState(null);
    useEffect(()=>{
     async function getApp(){
        try{

            const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data=await response.json();
            setData(data);
        }
        catch(error){
            console.log("Failed to load data:",error);
        }
    


    }
    getApp();
    },[data])
    return(<>
        <h1>Basic Component</h1>
        {data && <p>{data.title}
                    {data.id}
            </p>}
        </>
    )
}
export default Basic;