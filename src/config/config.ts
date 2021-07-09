export default {
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
  DB: {
    NAME: process.env.DB_NAME || "anunciosDB",
    USER: process.env.DB_USER || "admin",
    PASSWORD: process.env.DB_PASSWORD,
  },
};
