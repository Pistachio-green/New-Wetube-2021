import express from "express";

const PORT = 5000;

const app = express();

app.get("/", () => console.log("Taco is Love"));

const handleListening = () => 
console.log(`Server Listening on port http://localhost:${PORT} 🍕`);

app.listen(5000, (handleListening));

