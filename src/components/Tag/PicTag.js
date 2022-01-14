import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";
import TagForm from './TagForm';

function PicTag() {
    const [showField, setshowField] = useState(false);
    const onClick = () => setshowField(true);


  const Form = () =>     
  <div>   
    <TagForm></TagForm>
  </div>  
  
    return (
      <>
         {showField ? <Form /> : null}
        <FontAwesomeIcon onClick={onClick} icon={faTag} className='header__icon'></FontAwesomeIcon>

      </>
    );
}


    
export default PicTag;
  
        