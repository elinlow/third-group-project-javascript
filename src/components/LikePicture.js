import React, { useState } from 'react';

const LikePicture = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have {count} likes</p>
      <button onClick={() => setCount(count + 1)}>
        Like
      </button>
    </div>
  );
}