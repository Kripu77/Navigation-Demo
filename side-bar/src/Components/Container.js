import React,{useState} from 'react'
import {data} from "../Components/data";
import { GiAbstract031 } from "react-icons/gi";

const Container = ({setVisible}) => {


    return (
        <div className='container'>
            <div className='details'>
                <h1> Kripu Khadka</h1>
                <GiAbstract031 onClick={()=>setVisible(false)}/>
            </div>
            {
data.map((value)=>{
    const {id, url, name} = value;
    return <div key={id}>
      <a href={url}>{name}</a> </div>
})
            }
            
        </div>
    )
}

export default Container
