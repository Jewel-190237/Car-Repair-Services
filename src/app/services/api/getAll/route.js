import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = await connectDB();
    const serviceCollection = db.collection("services");
    try {
        const services = serviceCollection.find(services);
        return Response.json({services})

    } catch (error) {
        console.log(error)
    }

}