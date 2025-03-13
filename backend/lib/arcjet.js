import arcjet,{tokenBucket, shield, detectBot} from "@arcjet/node";

import "dotenv/config";

//init arcjet

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules: [
        //shield protect your app from common attacks
         shield({mode:"LIVE"}),
         detectBot({
            mode:"LIVE",
            //block all bots except search engines
            allow: [
                "CATEGORY:SEARCH_ENGINE",
            ],
         }),
         //rate limiting

         tokenBucket({
            mode:"LIVE",
            refillRate: 30,
            interval: 5,
            capacity: 20,
         }),
        ]
    });
