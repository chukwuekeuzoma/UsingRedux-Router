import React from "react"

const Higherfunction = (Wrapcomponent) =>{
      const colour =["red", "pink", "blue", "orange", "green"];
      const randonColour = colour[Math.floor(Math.random() * 5)];
      const className =  randonColour + "-text";
       
     return (props) =>{
         return(
             <div className ={className}>
               <Wrapcomponent {...props}/>
             </div>
         )
     } 
}

export default Higherfunction;