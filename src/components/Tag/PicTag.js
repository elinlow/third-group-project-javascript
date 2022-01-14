import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";
import TagForm from './TagForm';

function PicTag() {
    const [showField, setshowField] = useState(false);
    const onClick = () => setshowField(true);
  
    return (
      <>

        {showField ? <Text /> : null}
        <FontAwesomeIcon onClick={onClick} icon={faTag} className='header__icon'></FontAwesomeIcon>

      </>
    );
  }

  const Text = () =>     
    <div>   
        <TagForm></TagForm>
    </div>
    
  export default PicTag;
  
