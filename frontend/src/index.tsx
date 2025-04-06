import axios from "axios"

import { Link } from "react-router-dom"



function Index(){

 

    const gerstart= async()=>{

        try{
            const response=await axios.get( "http://localhost:5002/gitTableData/github" )
            console.log(response,"hii")
        }
        catch(err){
            console.log(err)
        }
    };


    return(
        <>
        <h1 className="m-5">welcome</h1>
        <Link to="/Home" onClick={()=>{gerstart()}} className="btn btn-primary m-5">get started</Link>
        </>
    )
}

export default Index;