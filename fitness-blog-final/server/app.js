const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: "Backend läuft!" });
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
