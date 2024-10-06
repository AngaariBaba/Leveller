import React  from "react";
import Questions from "../Components/Questions";
import Login from "./Login";


export default function POD({user})
{
    console.log(user+" inside pod");
    
    
    return(<>
    <Questions user={user}/>
    </>);
}