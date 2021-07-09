// imports
import app from "./app";
import "./config/database";

// Server listen
app.listen(process.env.PORT);
console.log("Server listen on port:", process.env.PORT);
