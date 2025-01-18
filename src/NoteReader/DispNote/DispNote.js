import React from "react";
import './DispNote.css';


function DispNote({ number }) {

   let temp = 10;

   if((number === 0 && temp === number) || (number === 2 && temp === number)  ){
    return (
        <>
        <div className={`selectedNote zeroNote allNote note` + number}>
            O
        </div>
     
        </>
      );
   }

    if(number > 2 && number % 2 === 0 && number < 13 && number === temp){
        return (
            <>
            <div className={`selectedNote allNote note` + number}>
                {"  "}O{"  "}  
            </div>
         
            </>
          );
    }

    if(number > 2 && number % 2 === 0 && number < 13 && number !== temp){
        return (
            <>
            <div className={`dispNote allNote note` + number}>
            {"                   "}
            </div>
         
            </>
          );
    }

    if(number % 2 === 1 && number < 13 && number === temp){
        return (
            <>
            <div className={`selectedOdd allNote note` + number}>
                O
            </div>
         
            </>
          );
    }


    

  return (
    <>
    <div className={`blankNote note` + number}>
        -
    </div>
 
    </>
  );
}
export default DispNote;


