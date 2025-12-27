// app.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// port de l'application
const PORT = process.env.PORT || 3000;
const app = express();
const prisma = new PrismaClient();




// Routes
app.get('/', async (req, res) => {
    //hello world
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});