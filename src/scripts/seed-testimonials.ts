
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing Supabase URL or Service Role Key");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah", "Ian", "Julia", "Kevin", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Tina"];
const catNames = ["Luna", "Milo", "Oliver", "Bella", "Leo", "Loki", "Simba", "Nala", "Chloe", "Max"];
const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA"];
const comments = [
    "Absolutely in love with our kitten!",
    "The best breeder we could have asked for.",
    "Ragdoll Heaven is simply amazing.",
    "Our kitten is so well socialized and affectionate.",
    "Highly recommended! Professional and caring.",
    "It was love at first sight. Detailed care instructions were a huge plus.",
    "Healthy, happy, and beautiful kittens.",
    "We can't imagine life without our little fluffball.",
    "Great experience from start to finish.",
    "The process was smooth and transparent."
];

async function seedTestimonials() {
    console.log("Seeding testimonials...");

    const testimonials = [];

    for (let i = 0; i < 70; i++) {
        const name = firstNames[Math.floor(Math.random() * firstNames.length)] + " " + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ".";
        const cat = catNames[Math.floor(Math.random() * catNames.length)];
        const city = locations[Math.floor(Math.random() * locations.length)];
        const comment = comments[Math.floor(Math.random() * comments.length)];

        testimonials.push({
            client_name: name,
            location: city,
            content: `${comment} ${cat} is settling in perfectly.`,
            rating: 5,
            approved: true, // Auto-approve for demo
            created_at: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
        });
    }

    const { error } = await supabase.from("testimonials").insert(testimonials);

    if (error) {
        console.error("Error seeding testimonials:", error);
    } else {
        console.log("Successfully seeded 70 testimonials!");
    }
}

seedTestimonials();
