import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";

function PicTag() {
    const [showField, setshowField] = useState(false);
    const onClick = () => setshowField(true);
  
    return (
      <>
        <FontAwesomeIcon onClick={onClick} icon={faTag} className='header__icon'></FontAwesomeIcon>

        {showField ? <Text /> : null}
      </>
    );
  }
  
  const Text = () => <div><input className='input-tag' placeholder='Type any name' type="text" name="name" /></div>;
  
  export default PicTag;
  
        //<button onClick={onClick}>Click me</button>