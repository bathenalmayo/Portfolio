const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, '/build'));
 });

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
 });