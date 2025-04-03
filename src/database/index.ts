import mongoose from 'mongoose';

export async function setupMongo(): Promise<void> {
	try {
		if (mongoose.connection.readyState === 1) {
			return;
		}
		console.log('MongoDB is already connected');
		console.log(process.env.MONGO_URL);
		await mongoose.connect(process.env.MONGO_URL as string);
		console.log('MongoDB is connected');
	} catch {
		throw new Error('Error connecting to MongoDB');
	}
}
