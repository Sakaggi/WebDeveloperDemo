const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request");
//     // res.send('<div> Hey you, cutie!</div>');
// })
app.get('/', (req, res) => {
    res.send("Welcome home");
})
app.get('/A', (req, res) => {
    res.send(' Hey you, cutie!');
})
app.get('/S', (req, res) => {
    res.send(' Hey you, golaaaa!');
})
app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    if (sub === 'Sakshi')
        res.send(`${sub} lobie dobie golu`);
    else
        res.send(`${sub} lobie dobie gappu`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) res.send(`No search, no result`);
    res.send(`Did you search for ${q}?`);

})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})