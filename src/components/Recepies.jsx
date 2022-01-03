import {useEffect, useState} from 'react'

import './Recepie.css'

const Recepies = () => {

    const [data,setData] = useState([])
    useEffect(()=>{
        getData(); 
    },[])

    const getData = ()=>{
        fetch('http://localhost:3001/recepies')
        .then((d)=> d.json())
        .then((res)=>{
            setData(res);
        })
    }
    return (
       <div className='Recepie' >
           {data.map((e)=>{
                return <div className='blocks'>
                    <h3>{e.title}</h3>
                    <p>Time: {e.time_to_cook}</p>
                    <img src={e.image} />
                    <p>Ingredients: {e.ingredients}</p>
                    <p>Instruction: {e.instruction}</p>

                </div>
           })}
       </div>
    )
}

export default Recepies;