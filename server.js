// server.js file received from South Face, maintained by Do You Eat Advil? (Blocher)

// import dependencies
import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
import cors from 'cors';

// import validator
import { validationResult, param, body } from 'express-validator';

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

// secured by not reading request object
app.get('/products',
    async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM products;');
            res.json(result.rows);
        } catch (err) {
            console.error('Error executing query', err.stack);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
);

// secured by validating id
app.get('/productImages/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by validating id
app.get('/products/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by validating id
app.get('/features/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by sanitizing body
app.post('/products',
    body('name').blacklist(";").escape(),
    body('description').blacklist(";").escape(),
    body('price').blacklist(";").escape(),
    body('averageRating').blacklist(";").escape(),
    async (req, res) => {
        // validate incoming body data
        const result = validationResult(req)
        if (!result.isEmpty) { res.status(400).json({ errors: result.array() }); return; }

        const { name, description, price, averageRating } = req.body;
        try {
            const newProduct = await pool.query(
                'INSERT INTO products (name, description, price, averageRating) VALUES ($1, $2, $3, $4) RETURNING *', [name, description, price, averageRating]
            );
            res.status(201).json(newProduct.rows[0]);
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    }
);

// secured by sanitizing body and validating id
app.put('/products/:id',
    param('id').isInt(),
    body('name').blacklist(";").escape(),
    body('description').blacklist(";").escape(),
    body('price').blacklist(";").escape(),
    body('averageRating').blacklist(";").escape(),
    async (req, res) => {
        // validate incoming body and parameters
        const result = validationResult(req)
        if (!result.isEmpty) { res.status(400).json({ errors: result.array() }); return; }

        const { id } = req.params;
        const { name, description, price, averageRating } = req.body;
        try {
            const updatedProduct = await pool.query(
                'UPDATE products SET name = $1, description = $2, price = $3, averageRating = $4 WHERE productId = $5 RETURNING *', [name, description, price, averageRating, id]
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
    }
);

// secured by validating id
app.delete('/products/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);


/* --- "reviews" table routes --- */

// secured by sanitizing parameters
app.get('/reviews/:category/:order',
    param('category').blacklist(';').escape(),
    param('order').blacklist(';').escape(),
    async (req, res) => {
        // sanitize incoming parameters
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

        const { order, category } = req.params;

        try {
            const result = await pool.query(`SELECT * FROM reviews ORDER BY ${category} ${order}`);
            console.log(result)
            res.json(result.rows);
        } catch (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
);

// secured by validating id
app.get('/reviews/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by sanitizing body
app.post('/reviews',
    body('rating').blacklist(';').escape(),
    body('ratingTitle').blacklist(';').escape(),
    body('comment').blacklist(';').escape(),
    body('userName').blacklist(';').escape(),
    async (req, res) => {
        // sanitize the body before reading it
        const result = validationResult(req)
        if (!result.isEmpty) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by sanitizing body and validating id
app.put('/reviews/:id',
    param('id').isInt(),
    body('rating').blacklist(';').escape(),
    body('ratingTitle').blacklist(';').escape(),
    body('comment').blacklist(';').escape(),
    body('userName').blacklist(';').escape(),
    async (req, res) => {
        // sanitize body and validate id before reading it
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by validating id
app.delete('/reviews/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);


/* --- "recommendedProducts" table routes --- */

// secured by not reading request object
app.get('/recommendedProducts',
    async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM recommendedProducts');
            res.json(result.rows);
        } catch (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
);

// secured by validating id
app.get('/recommendedProducts/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by sanitizing body
app.post('/recommendedProducts',
    body('name').blacklist(';').escape(),
    body('description').blacklist(';').escape(),
    body('price').blacklist(';').escape(),
    body('imageUrl').blacklist(';').escape(),
    body('averageRating').blacklist(';').escape(),
    async (req, res) => {
        // sanitize body before reading it
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by sanitizing body and validating id
app.put('/recommendedProducts/:id',
    param('id').isInt(),
    body('name').blacklist(';').escape(),
    body('description').blacklist(';').escape(),
    body('price').blacklist(';').escape(),
    body('imageUrl').blacklist(';').escape(),
    body('averageRating').blacklist(';').escape(),
    async (req, res) => {
        // verify sanitation and validation before reading it
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);

// secured by validating id
app.delete('/recommendedProducts/:id',
    param('id').isInt(),
    async (req, res) => {
        // validate incoming id
        const result = validationResult(req);
        if (!result.isEmpty()) { res.status(400).json({ errors: result.array() }); return; }

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
    }
);


/* --- listener --- */
app.listen(PORT,
    () => {
        console.log("Server listening on port", PORT, "with database URL '" + DATABASE_URL + "'");
    }
);
