\c {database};

DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    reviewId serial,
    productId serial,
    rating NUMERIC,
    ratingTitle varchar(25),
    comment text,
    userName varchar,
);

CREATE TABLE products (
    productId serial,
    name VARCHAR,
    description VARCHAR,
    price numeric,
    imageUrl VARCHAR,
    averageRating numeric,
);

INSERT INTO reviews (productId, rating, ratingTitle, comment, userName) VALUES (productId, 5, `I would by this backpack 10 times over`, `It's so spacious and really pretty.`, `Priscilla`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES ( productId, 5, `Love it! Definitely would recommend!`, `My daughter loves this. Perfect for high school.`, `Pam`);
 

INSERT INTO products (name, description, price, imageUrl, averageRating) VALUES ("Women's Jester Luxe Backpack", `Our classic Women’s Jester pack—now available in a Luxe edition with premium metallic accents—has a padded laptop sleeve, simplified organization, and can stand up completely unsupported. It’s also endorsed by the American Chiropractic Association.`, 80.00, https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0, 4.25);
INSERT INTO products (name, description, price, imageUrl, averageRating) VALUES ();