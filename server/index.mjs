import express from 'express';
import cors from 'cors';
import { checkConnection } from './db_config.js';

const app = express();
const port = 3000;

const connection = checkConnection();

app.use(cors({credentials: true, origin: ["http://localhost:5173"]}));
app.use(express.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * from users WHERE username=? AND password=? LIMIT 1';

    connection.query(query, [username, password], (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            res.json(true)
        } else {
            res.json(false);
        }
    });
});

app.get('/users/get-all', (req, res) => {
    const query = 'SELECT * from users';

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }
            res.json(results);
    });
});

app.post('/users/check-user', (req, res) => {
    const {username, password} = req.body;
    const query = 'SELECT * from users WHERE username=? AND password=?';

    connection.query(query, [username, password], (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }
        if (results.length > 0) {
            res.json(true)
        } else {
            res.json(false);
        }
    });
});

app.get('/products/get-all', (req, res) => {
    const query = 'SELECT * from products';

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }
            res.json(results);
    });
});

app.post('/products/get-by-id', async (req, res) => {
    const  {product_id } = req.body;
    const query = 'SELECT * from products WHERE product_id =?';

    connection.query(query, [product_id], (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            res.json(results)
        } else {
            res.status(500).json({error: 'No Product to this Number!' });
        }
    });
});

app.post('/products/add-product', async (req, res) => {
    const  {product_id, product_name, quantity, unit, price } = req.body;

    const query = 'INSERT INTO products (product_id, product_name, quantity, unit, price) VALUES(?,?,?,?,?)';

    connection.query(query, [product_id, product_name, quantity, unit, price], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({exist: true, success: false});
            return;
        }
        if (results.affectedRows > 0) {
            res.json({exist: false, success: true });
        } else {
            res.json({exist: false, success: false});
        }
    });
});

app.post('/products/update-by-id', async (req, res) => {
    const  {product_id, product_name, quantity, unit, price } = req.body;
    const query = 'UPDATE products set product_name =?, quantity =?, unit =?, price =? WHERE product_id =?';

    connection.query(query, [product_name, quantity, unit, price, product_id], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }

        if (results.affectedRows > 0) {
            res.json(true)
        } else {
            res.json(false);
        }
    });
});

app.post('/products/delete-by-id', async (req, res) => {
    const  {product_id} = req.body;
    const query = 'DELETE from products WHERE product_id =?';

    connection.query(query, [product_id], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({error: 'Internal server error' });
            return;
        }

        if (results.affectedRows > 0) {
            res.json(true)
        } else {
            res.status(404).json(false);
        }
    });
});

app.listen(port, () => {
    console.log('Server listening on port ${port}');
});
