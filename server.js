const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Your backend is running perfectly on Render!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the free server!", status: "success" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
