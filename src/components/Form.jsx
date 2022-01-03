import { useState } from "react"
import "./Form.css"

const Form = ()=>{

    const [form,setForm]=useState(
        {
            title:"",
            ingredients:"",
            time_to_cook:"",
            instruction:"",
            image:""
        }
    )

    const handleChange=(e)=>{
        let {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const submitted = (e)=>{
        e.preventDefault();
        const payload = {
            title:form.title,
            ingredients:form.ingredients,
            time_to_cook:form.time,
            instruction:form.instructions,
            image:form.image
        }
        

        fetch('http://localhost:3001/recepies',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json",
            }
        })
        e.target.reset()
    }

    return (
        <div>
            <h3>Add Your Own Recepie</h3>
        <form className="Form" onSubmit={submitted}>
            <label>
                Title-- 
            </label><br />
            <input type="text" name="title" onChange={handleChange}/><br />
            <label>
                Ingredients-- 
            </label><br />
            <input type="text" name="ingredients" onChange={handleChange} /><br />
            <label>
                Time To Cook-- 
            </label><br />
            <input type="text" name="time" onChange={handleChange} /><br />
            <label>
                Instructions-- 
            </label><br />
            <input type="text" name="instructions" onChange={handleChange} /><br />
            <label>
                Image Link-- 
            </label><br />
            <input type="text" name="image" onChange={handleChange} /><br /><br />

            <input type="submit" />
        </form>
        </div>
    )
}

export default Form