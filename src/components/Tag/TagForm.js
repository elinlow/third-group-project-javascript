import React, { useState } from 'react';

    
const TagForm = () => {
    
    const [input, setInput] = useState("");
    
    const handleSubmit = (e) => {
    
        e.preventDefault();

        console.log(`Tag added as, ${input}`);    

        
        
        //saving input to local storage
        const tag = [];
        tag[0] = input;
        localStorage.setItem("tag", JSON.stringify(tag));

        //...
        const storedTags = JSON.parse(localStorage.getItem("tag"));

    }
    return (
        <div>
            <form className='tag-form' onClick = {handleSubmit}>
                <input 
                    className='input-tag d-flex' 
                    placeholder='Type any name' 
                    type="text" name="tag" 
                    onChange = {(e) => setInput(e.target.value)} 
                    value = {input}>
                </input>
                <button type='submit' value='submit'>Tag</button>
            </form>
        </div>
    )

}

export default TagForm;