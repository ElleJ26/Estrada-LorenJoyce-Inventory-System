import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('home', (req, res) => {
    res.send('This is a sample home');
});

app.get('/new-route', (req, res) => {
    res.send('This is a new route');
});

app.get('/author', (req, res) => {
    res.send('Loren Joyce B. Estrada');
});

app.get('/contact', (req, res) => {
    res.send('estradalorenjoyce@gmail.com');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID: ${userId}`);
});

app.get('/users/check-user', (req, res) => {
    res.send('Hello get');
});

app.get('/products/get-info/:product_id', (req, res) => {
    const productId = req.params.product_id;
    res.send(`This is a sample product info route for: ${productId}`);
});

app.get('/reports/get-monthly', (req, res) => {
    res.send('This is a sample monthly route');
});

app.get('/reports/get-yearly', (req, res) => {
    res.send('This is a sample yearly route');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});