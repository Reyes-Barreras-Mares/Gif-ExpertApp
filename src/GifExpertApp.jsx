import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

 const [categories, setCategories] = useState(['One piece']); 

  const onAddCategory = (newCategory)=> {
    setCategories([newCategory,...categories]);
 
  }

  return (
    <>
{/* Titulo */} 
<h1>GifExpertApp</h1>




{/*  /* Input */} 
<AddCategory  onNewCategory={ event => onAddCategory (event) }


/* setCategories=
{setCategories} */

/>


{/*   /* Listado de gif */}
  {
  categories.map((category) =>(
   <GifGrid key={category}  category={category}/>
 
  ))
  }
  





{/* Gif item  */}



</>
  )
}
