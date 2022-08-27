
process.on('uncaughtException', err => {
    console.log('Uncaught Exception! 🎇 Shutting down...');
    console.log(err.name,': ', err.message);
    process.exit(1);
});

import app from "../app.js";

// const DB = "mongodb://localhost:27017/apiDB";

// mongoose.connect(DB).then(() => {
//   console.log("DB connected successfully!");
// }).catch(err => {
//     console.log(err);
// });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 🎇 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});