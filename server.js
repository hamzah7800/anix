const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Option A: Serve your static index.html file from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Option B: Or send the file explicitly on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});