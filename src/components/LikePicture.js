import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import '../LikePicture.css';
import cuteDog from '../assets/dog.png'
import CommentPicture from './CommentPicture';
import CommentBox from './CommentBox';
import Comment from './Comment';

const LikePicture = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={cuteDog} alt="Elin's picture" className="dog" />
      <p>This picture has {count} likes</p>
      <button className="like-button" onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <div>
        <CommentPicture />
        {/* <CommentBox /> */}
        {/* <Comment /> */}
      </div>
    </div>
  );
}

export default LikePicture;