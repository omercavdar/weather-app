const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express!');
})

app.get('/help', (req, res) => {
    res.send('Help page!');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Istanbul'
    });
})

app.listen(8000, () => {
    console.log('Application is running');
});