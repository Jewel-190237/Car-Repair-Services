
const { MongoClient, ServerApiVersion } = require('mongodb');
let db;

export const connectDB = async () => {
  if (db)
    return db;
  try {
    const uri = process.env.NEXT_MONGODB_URI
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    db = db.connect('car-doctor-next');
  } catch (error) {
    console.log(error)
  }
}




