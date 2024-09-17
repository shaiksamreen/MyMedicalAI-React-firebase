
// import React from 'react';

// function Home() {
//   return (
//       <div>
//         <h1 style={{justifyContent:'center', display:'flex', fontSize:'20px'}}>Prescription App</h1>
//       </div>

//   );
// }

// export default Home;
// src/App.js
import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageRecognition from './ImageRecognition';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUploaded = (url) => {
    setImageUrl(url);
  };
console.log(imageUrl,'-------p  ')
  return (
    <div className="App">
      <h1>Prescription Image Recognition</h1>
      <ImageUpload onImageUploaded={handleImageUploaded} />
      {imageUrl && <ImageRecognition imageUrl={imageUrl} />}
    </div>
  );
};

export default App;

