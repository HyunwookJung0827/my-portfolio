import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Already connected to the database.');
    return;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  try {
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Database connection failed');
  }
};

export default connectToDatabase;