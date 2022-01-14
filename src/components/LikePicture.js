import React, { useState } from 'react';
import ReusableButton from './ReusableButton';

const LikePicture = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This picture has {count} likes</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Like
      </button>
    </div>
  );
}

export default LikePicture;