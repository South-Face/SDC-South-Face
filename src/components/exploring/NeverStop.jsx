import React from 'react';
import './NeverStop.css';

const NeverStop = () => {
  return (
    <div className="never-stop-container">
      <h2 className="never-stop-heading">#NeverStopExploring</h2>
      <p className="never-stop-text">
        We love seeing our gear out in the wild. Share your photos with #neverstopexploring,
        and tag {<a href='#'>@thenorthface</a>} to be featured here.
      </p>
    </div>
  );
};

export default NeverStop;
