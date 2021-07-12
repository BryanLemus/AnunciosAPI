// imports
import app from "./app";
import "./config/database";

/**
 *
 * Server Activation
 *
 */

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
