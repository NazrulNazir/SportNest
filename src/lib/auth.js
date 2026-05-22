// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient("mongodb://localhost:27017/database");
// const db = client.db();

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.SPORTNEST_URI);
const db = client.db('SportNest');

export const auth = betterAuth({
    // account: {
    //       trustedProviders: {
    //         enabled: true,
    //         trustedProviders: ["google", "github"], // Add trusted providers
    //     },
    // },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    user: {
        changeEmail: {
            enabled: true,
            updateEmailWithoutVerification: true
        }
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    session : {
        cookieCache: {
            enabled: true,
            strategy: 'jwt',
            // max age 30day
            maxAge: 30 * 24 * 60 * 60
        }
    },
      plugins: [
        jwt(), 
    ]
});
