import React from "react"; 
import Businesses from "./Businesses.js"; 
import { Link } from "react-router-dom";

export default function Home ()
{
  return (
    <div>

<h2> Welcome! </h2> <p> You are looking for places and businesses led by women*!
Wonderful, you are aware of the gender gap!
Women fight assertive and tireless a continuous struggle - both in society in general and in their places of work. And that despite all lip service to diversity.By coming to this site you are turning a page being an active contributor to raising awareness and making a change for an equal future!
 The road to equality lies ahead, look at our range of businesses, they are all led by women*!
Visit the places, support them by going there! </p> 
     
         <Businesses />

    </div>
  );
}
