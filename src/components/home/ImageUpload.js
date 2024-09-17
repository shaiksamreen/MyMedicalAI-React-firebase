// src/components/ImageUpload.js
import React, { useState } from 'react';
import { storage, ref, uploadBytes, getDownloadURL } from '../../firebase/firebase'

const ImageUpload = ({ onImageUploaded }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    try {
      const storageRef = ref(storage, `prescriptions/${file.name}`);
      const uploadTask = uploadBytes(storageRef, file);

      uploadTask.then(snapshot => {
        const totalBytes = snapshot.metadata.size;
        const uploadedBytes = snapshot.bytesTransferred;
        const progress = (uploadedBytes / totalBytes) * 100;
        setProgress(progress);

        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        onImageUploaded(url);
      })
      .catch((error) => {
        console.error('Upload error:', error);
      });
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {progress > 0 && <p>Upload progress: {progress}%</p>}
    </div>
  );
};

export default ImageUpload;
