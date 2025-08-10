import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  maxRetriesPerRequest: null, // Prevents request limit errors
  tls: {} // Ensures SSL/TLS is enabled for Upstash
});
//redis is : key value store
