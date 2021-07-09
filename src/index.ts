import app from "./app";
import "./config/database";

app.listen(process.env.PORT);
console.log("Server ready on port:", process.env.PORT);
