import React from "react"; 
import Businesses from "./Businesses.js"; 
import CategoriesList from "./CategoriesList.js"; 
import { Link } from "react-router-dom";

export default function Home ()
{
  return (
    <div>

        {/* <CategoriesList />  */}
     
         <Businesses />

    </div>
  );
}
