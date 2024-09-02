import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = await connectDB();
    const serviceCollection = db.collection("services");

    try {
        await serviceCollection.deleteMany();
        const services = serviceCollection.find(services).toArray();
        return Response.json({services})

    } catch (error) {
        console.log(error)
    }

}