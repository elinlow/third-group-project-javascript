import React, { useState } from 'react';

    
const TagForm = () => {
    
    const [input, setInput] = useState("");
    const [show, setShow] = useState("true");
    const onClick = () => setShow(false);
    
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

    const InputField = () => 
    <>
    <input 
        className='input-tag d-flex' 
        placeholder='Type any name' 
        type="text" name="tag" 
        onChange = {(e) => setInput(e.target.value)} 
        value = {input}>
    </input>


    </>
    return (
        <div>
            
            <form className='tag-form' onClick = {handleSubmit}>
                {show ? <InputField /> : null}  
                {show ?  <button onClick={onClick} className='submit-tag' type='submit' value='submit'>Tag</button> : null}           
            </form>
        </div>
    )

}

export default TagForm;