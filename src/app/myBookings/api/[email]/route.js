import { connectDB } from "@/lib/connectDB"

export const GET = async (request, {params}) => {
    const db = await connectDB();
    const bookingCollections = db.collection("bookings");
    try {
        const myBookings = await bookingCollections.find({email: params.email}).toArray();
        return Response.json(myBookings)

    } catch (error) {
        console.log(error)
    }

}