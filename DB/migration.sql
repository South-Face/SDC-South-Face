-- \c fec_south_face;

DROP TABLE reviews;
DROP TABLE recommendedProducts;
DROP TABLE productImages;
DROP TABLE products;
DROP TABLE features;

CREATE TABLE reviews (
    reviewId serial PRIMARY KEY,
    rating NUMERIC,
    ratingTitle varchar,
    comment text,
    userName varchar
);

CREATE TABLE recommendedProducts ( 
    recommendedProductsId serial PRIMARY KEY,
    name VARCHAR,
    price numeric,
    imageUrl VARCHAR
);

CREATE TABLE products (
    productId serial PRIMARY KEY,
    name VARCHAR,
    description VARCHAR,
    price numeric,
    averageRating numeric
);

CREATE TABLE productImages (
    imageId serial PRIMARY KEY,
    productId integer REFERENCES products(productId),
    imageUrl VARCHAR
);

CREATE TABLE features (
    featuresId serial PRIMARY KEY,
    productId integer REFERENCES products(productId),
    feature varchar
);




-- Data to be seeded into the reviews table
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'I would by this backpack 10 times over', 'It''s so spacious and really pretty.', 'Priscilla');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'Love it! Definitely would recommend!', 'My daughter loves this. Perfect for high school.', 'Pam');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (3, 'It''s ok', 'The backpack itself is really nice, but I wanted the white zippers like shown in the photos but it has black zippers.', 'Sunny');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'Great support and style', 'Bought this specifically for school and absolutely love this big space it has and the padding for the back supports when wearing. i''ve never found a comfortable backpack and this one has all the supports and storage needed. I also loved the color options and the look of the backpack as well!', 'Jessie');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'LuViT!', 'Will be using this for college', 'Sonia');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'Great fr College Students', 'Great fr College Students', 'Kayla');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'Perfect for College Student', 'Spacious and very comfortable. Fits all my college essentials and keeps me very well organized.', 'Karla');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'Super cute and super in style', 'It''s so hard to find a white/cream colored backpack. This is so beautiful and has a sheen in the fabric. Very sturdy and rose gold accents throughout. So elegant yet sporty for school and lugging around girly stuff. Perfectly matches all my Lululemon fit in bone color. This was a hard find but a perfect match. Love!!!', 'Patricia');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (3, 'Not enough room...', 'This is an attractive backpack, but as others have said (here and on Google reviews)- this backpack is way too small for work/school, unless you don''t use a laptop case/sleeve or don''t pack books.', 'toosmall');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'I would definitely recommend!', 'My daughter will be using this for her freshman year in high school. There are so many pockets and space for her things. It''s also very pretty!', 'Pam');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (4, 'Love the backpack! I would buy it again in a heartbeat.', 'I really love this backpack and am very happy with my purchase. The color is gorgeous, and it sits on my back in a way that makes the load feel lighter. The ONLY reason that I didn''t give it 5 stars is because I would have liked if it had a zippered pocket or two in the larger part of the bag.', 'Hope');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (5, 'Gave as a gift and want one for myself!', 'I gave this as a gift to my friend and she loved it! She was looking for something to upgrade her current backpack and loves the color detail on the jester backpack. It''s very roomy.', 'Malina');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (2, 'Disappointed', 'I wanted to replace my Jester that I bought in 2020. Since then the product has been redesigned and it no longer serves my needs. I went to place my 15 inch laptop in the laptop sleeve of the new bag (it fits comfortably in the old one) and it got jammed. They also removed a velcro pocket in the front. I''m extremely disappointed and will be returning.', 'Arianna');
INSERT INTO reviews (rating, ratingTitle, comment, userName) VALUES (4, 'I highly recommend this product.','Love in it. The straps along the back adds so much flexibility… which was helpful when traveling from the USA to Portugal.', 'thomas');
-- INSERT INTO reviews (rating, ratingTitle comment, userName) VALUES ();


-- Data to be seeded into the products table
INSERT INTO products (name, description, price, averageRating) VALUES ('Women''s Jester Luxe Backpack', 'Our classic Women''s Jester pack—now available in a Luxe edition with premium metallic accents—has a padded laptop sleeve, simplified organization, and can stand up completely unsupported. It''s also endorsed by the American Chiropractic Association.', 80.00, 4.25);
-- INSERT INTO products (name, description, price, averageRating) VALUES ('Women''s Borealis Backpack', 'The Women''s Borealis Backpack is a best-seller for good reason. With its iconic bungee cord system, women-specific FlexVent™ suspension system and large interior compartment, you can keep your items secure, inside and out. This go-anywhere pack also features a stand-up design, sternum strap, removable waist belt and protective laptop compartment.', 99.00, 4.5);
-- INSERT INTO products (name, description, price, averageRating) VALUES ('Women''s Recon Backpack', 'An icon reimagined, the Women''s Recon excels as a daypack with its women-specific suspension, large mesh storage pocket, and daisy-chain attachment points.', 109.00, 4.5);
-- INSERT INTO products (name, description, price, averageRating) VALUES ('Women''s Antora Jacket', 'Made with 100% recycled fabrics, the Women''s Antora Jacket is a modern silhouette inspired by our iconic Mountain Light Jacket. This water-repellent, breathable, and windproof shell also features secure-zip pockets and an adjustable hood.', 99.00, 4.75);
-- INSERT INTO products (name, description, price, averageRating) VALUES ('Women''s Antora Parka', 'Made with 100% recycled fabrics, the Women''s Antora Parka is a bold, thigh-length silhouette inspired by our iconic Mountain Light Jacket. This water-repellent, breathable, and windproof shell features an adjustable hem and hood so you can customize your fit to the adventure.', 120.00, 5);
-- INSERT INTO products (name, description, price, averageRating) VALUES ();


-- Data to be seeded into recommendedProducts table(Optional at this point)
INSERT INTO recommendedProducts (name, price, imageUrl) VALUES ('Women''s Borealis Backpack', 99.00, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A52SI_22B_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO recommendedProducts (name, price, imageUrl) VALUES ('Women''s Recon Backpack', 109.00, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A52SU_Q4C_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO recommendedProducts (name, price, imageUrl) VALUES ('Women''s Antora Jacket', 99.00, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QEU_856_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO recommendedProducts (name, price, imageUrl) VALUES ('Women''s Antora Parka', 120.00, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QEW_N0T_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
-- INSERT INTO recommendedProducts (name, price, imageUrl) VALUES ();



INSERT INTO productImages (productId, imageUrl) VALUES (1, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO productImages (productId, imageUrl) VALUES (1, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_back?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO productImages (productId, imageUrl) VALUES (1, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_front34?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO productImages (productId, imageUrl) VALUES (1, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_modelback?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO productImages (productId, imageUrl) VALUES (1, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_int?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
INSERT INTO productImages (productId, imageUrl) VALUES (1, 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_detail1?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');
-- INSERT INTO productImages (productId, imageUrl) VALUES (1,);

INSERT INTO features (productId, feature) VALUES (1, 'The Luxe edition features a premium metallic embroidered logo and metallic zipper pulls');
INSERT INTO features (productId, feature) VALUES (1, 'Our women-specific FlexVent™ suspension system, certified by the American Chiropractic Association, features a flexible yoke built from custom injection-molded shoulder straps; an unbelievably comfortable, padded back panel; and a highly breathable lumbar panel');
INSERT INTO features (productId, feature) VALUES (1, 'Two webbing top handles make it convenient to open and provide a balanced carry so it doesn''t swing into your side when you''re walking');
INSERT INTO features (productId, feature) VALUES (1, 'Pack stands on its own for easy loading and unloading');
INSERT INTO features (productId, feature) VALUES (1, 'Padded 16'' laptop sleeve helps protect laptop from bumps and falls');
INSERT INTO features (productId, feature) VALUES (1, 'Huge main compartment holds books and binders for a day on campus');
INSERT INTO features (productId, feature) VALUES (1, 'Front compartment simplifies organization for the modern user while maintaining essential features for storage such as secure-zip pockets, a tablet sleeve and a key clip');
INSERT INTO features (productId, feature) VALUES (1, 'Two external water bottle pockets');
INSERT INTO features (productId, feature) VALUES (1, 'Stylish front bungee system for additional storage');
INSERT INTO features (productId, feature) VALUES (1, '360-degree reflectivity');
INSERT INTO features (productId, feature) VALUES (1, 'Sternum strap');
-- INSERT INTO features (productId, feature) VALUES (1, '');
