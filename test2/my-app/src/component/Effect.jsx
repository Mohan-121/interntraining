import { useEffect } from "react";
function Effect(){
useEffect(() => {
        console.log("hi from useEffect")
        const timer = setInterval(()=>{
            console.log("hello students")
        }, 1000)

        return ()=>{
            clearInterval(timer);
            console.log("timer stopped")
        }
 }, [])

    return(
        <>
        <h1>Timer console</h1>
  </>
    )
}

export default Effect;