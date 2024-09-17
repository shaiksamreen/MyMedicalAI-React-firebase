// src/components/ImageRecognition.js
import React, { useState } from 'react';
import { functions, httpsCallable } from '../../firebase/firebase'

const ImageRecognition = ({ imageUrl }) => {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const extractText = async () => {
    setIsProcessing(true);
    try {
      const extractTextFromImage = httpsCallable(functions, 'extractTextFromImage');
      const result = await extractTextFromImage({ imageUrl });
      console.log(result,'-----r')
      setText(result.data.text);
    } catch (error) {
      console.error('Error extracting text:', error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  React.useEffect(() => {
    if (imageUrl) {
      extractText();
    }
  }, [imageUrl]);
console.log(text,'----t')
  return (
    <div>
      {isProcessing ? <p>Processing...</p> : <pre>{text}</pre>}
    </div>
  );
};

export default ImageRecognition;
