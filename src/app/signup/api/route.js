import { connectDB } from "@/components/lib/connectDB";
import { message } from "antd";
import Email from "next-auth/providers/email";

export const POST = async (request) => {
    const newUser = await request.json();
    try{
        const db = await connectDB()
        const userCollection = await db.collection('users')
        const res = await userCollection.insertOne(newUser)

        const exists = userCollection.findOne({email: newUser.email})
        if(exists) {
            return Response.json({message: 'user already exists'}, {status: 304})
        }

        return Response.json({message: 'user created'}, {status: 200})
    }catch(error){
        return Response.json({message: 'something went wrong'}, {status: 500})
    }
}