import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingCollections = db.collection("bookings");

    try {
        const res = bookingCollections.insertOne(newBooking);
        return Response.json({ message: "Booking added successfully" }, { status: 200 })

    } catch (error) {
        return Response.json({ message: "Something went wrong" }, { status: 400 })
    }
}