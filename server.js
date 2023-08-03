// server.js file received from South Face, maintained by Do You Eat Advil? (Blocher)

// import dependencies
import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
import cors from 'cors';

// initialize app
const app = express();

// configure environment variables
dotenv.config();
const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

// configure query pool
const { Pool } = pkg;
const pool = new Pool({ connectionString: DATABASE_URL });

// middleware
app.use(cors(), express.json(), express.static('dist'));

/* --- "products" table routes --- */
app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/productImages/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT imageUrl FROM productImages WHERE productId = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Product Images not found' });
        } else {
            res.json(result.rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT name, price, description FROM products WHERE productId = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(result.rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/features/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT feature FROM features WHERE productId = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Product Images not found' });
        } else {
            res.json(result.rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/products', async (req, res) => {
    const { name, description, price, imageUrl, averageRating } = req.body;
    try {
        const newProduct = await pool.query(
            'INSERT INTO products (name, description, price, imageUrl, averageRating) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, description, price, imageUrl, averageRating]
        );
        res.status(201).json(newProduct.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imageUrl, averageRating } = req.body;
    try {
        const updatedProduct = await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3, imageUrl = $4, averageRating = $5 WHERE id = $6 RETURNING *', [name, description, price, imageUrl, averageRating, id]
        );
        if (updatedProduct.rowCount === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(updatedProduct.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        //check that the product exists in the database
        const product = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        if (product.rowCount === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Internal Server Error');
    }
});


/* --- "reviews" table routes --- */
app.get('/reviews/:category/:order', async (req, res) => {
    const { order, category } = req.params;

    try {
        const result = await pool.query(`SELECT * FROM reviews ORDER BY ${category} ${order}`);
        console.log(result)
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM reviews WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Review not fount' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/reviews', async (req, res) => {
    const { rating, ratingTitle, comment, userName } = req.body;
    try {
        const newReview = await pool.query(
            'INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES ($1, $2, $3, $4) RETURNING *', [rating, ratingTitle, comment, userName]
        );
        res.status(201).json(newReview.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    const { rating, ratingTitle, comment, userName } = req.body;
    try {
        const existingReview = await pool.query('SELECT * FROM reviews WHERE id = $1', [id]);
        if (existingReview.rowCount === 0) {
            res.status(404).json({ error: 'Review not found' });
        } else {
            const updatedReview = await pool.query(
                'UPDATE reviews SET rating = $1, ratingTitle = $2, comment = $3, userName = $4 WHERE id = $5 RETURNING *', [rating, ratingTitle, comment, userName, id]
            );
            res.json(updatedReview.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const existingReviews = await pool.query('SELECT * FROM reviews WHERE id = $1', [id]);
        if (existingReviews.rowCount === 0) {
            res.status(404).json({ error: 'Review not found' });
        }
        else {
            await pool.query('DELETE FROM reviews WHERE id = $1 RETURNING *', [id]);
            res.status(200).json({ message: 'Review deleted successfully' });
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


/* --- "recommendedProducts" table routes --- */
app.get('/recommendedProducts', async (req, res) => {
    console.log('Hello');
    try {
        const result = await pool.query('SELECT * FROM recommendedProducts');
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/recommendedProducts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM recommendedProducts WHERE recommendedProductsId = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Recommended Product not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/recommendedProducts', async (req, res) => {
    const { name, description, price, imageUrl, averageRating } = req.body;
    try {
        const newRecommendedProduct = await pool.query(
            'INSERT INTO recommendedProducts (name, description, price, imageUrl, averageRating) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, description, price, imageUrl, averageRating]
        );
        res.status(201).json(newRecommendedProduct.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/recommendedProducts/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imageUrl, averageRating } = req.body;
    try {
        const existingRecommendedProduct = await pool.query('SELECT * FROM recommendedProducts WHERE recommendedProductsId = $1', [id]);
        if (existingRecommendedProduct.rowCount === 0) {
            res.status(404).json({ error: 'Recommended Product not found' });
        } else {
            const updatedRecommendedProduct = await pool.query(
                'UPDATE recommendedProducts SET name = $1, description = $2, price = $3, imageUrl = $4, averageRating = $5 WHERE recommendedProductsId = $6 RETURNING *',
                [name, description, price, imageUrl, averageRating, id]
            );
            res.json(updatedRecommendedProduct.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/recommendedProducts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const existingRecommendedProducts = await pool.query('SELECT * FROM recommendedProducts WHERE id = $1', [id]);
        if (existingRecommendedProducts.rowCount === 0) {
            res.status(404).json({ error: 'Recommended Product not found' });
        } else {
            await pool.query('DELETE FROM recommendedProducts WHERE id = $1 RETURNING *', [id]);
            res.status(200).json({ message: 'Recommended Product deleted successfully' });
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


/* --- listener --- */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
