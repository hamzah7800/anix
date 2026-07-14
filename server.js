const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
   res.json({ message: "Hello from the free server!", status: "success" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log('Server is running on port ' + PORT);
});
