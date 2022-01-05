import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp =()=>{
   
        const [categories, setcategories] = useState(["Digimon"]);
         

        return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>
           
            <ol>
                { categories.map(category=>{
                    return <GifGrid key={category} category= {category} />
                } ) }
            </ol> 
        </>
        )
    }

 