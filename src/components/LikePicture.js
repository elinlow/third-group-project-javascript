import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import '../LikePicture.css';
import cuteDog from './assets/dog.png';

const LikePicture = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src="cuteDog" alt="Elin's picture" />
      <p>This picture has {count} likes</p>
      <button className="likeButton" onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  );
}

export default LikePicture;