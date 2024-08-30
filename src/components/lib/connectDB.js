import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db)
    return db;
  try {
    const uri = "mongodb+srv://CarDoctor2:L0wOtcYEm4cHUHH1@cluster0.kwtddbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    db = client.db('car-doctor-next');
    return db;
  } catch (error) {
    console.log(error)
  }
}




