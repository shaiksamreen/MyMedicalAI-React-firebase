
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');
const cors = require('cors')({ origin: true });

admin.initializeApp();

// Create a client for Google Cloud Vision
const client = new vision.ImageAnnotatorClient();

exports.extractTextFromImage = functions.https.onCall(async (data, context) => {
  const { imageUrl } = data;

  // Validate input
  if (!imageUrl) {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with an imageUrl.');
  }

  try {
    // Perform text detection on the image
    const [result] = await client.textDetection(imageUrl);
    const detections = result.textAnnotations;

    // Extract the text
    const extractedText = detections.length > 0 ? detections[0].description : '';

    return { text: extractedText };
  } catch (error) {
    console.error('Error extracting text:', error);
    throw new functions.https.HttpsError('internal', 'Error extracting text from the image.');
  }
});


