
import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

// Get credentials from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Check if credentials exist
if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error("Supabase environment variables are missing!");
}

// Create Supabase client
export const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

console.log("Supabase client initialized successfully!");
