import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import '../LikePicture.css';
import cuteDog from '../assets/dog.png'
import MainHeader from './MainHeader';
import Comment from './Comment/index.js';

const LikePicture = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
		<MainHeader />
		<img src={cuteDog} alt="Elin's picture" className="dog" />
		<p>This picture has {count} likes</p>
		<button className="like-button" onClick={() => setCount(count + 1)}>
			<FontAwesomeIcon icon={faHeart} />
		</button>
		<div>
			<Comment />
		</div>
    </div>
  );
}

export default LikePicture;