import NextAuth from "next-auth/next";

const handler = async () => NextAuth({
    session: {},
    providers: {},
    callbacks: {},
    pages: {
        signIn: ''
    }
})

export { handler as GET, handler as POST }