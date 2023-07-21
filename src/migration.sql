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
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 3, "It's ok", "The backpack itself is really nice, but I wanted the white zippers like shown in the photos but it has black zippers.", "Sunny");
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (ProductId, 5, `Great support and style`, `Bought this specifically for school and absolutely love this big space it has and the padding for the back supports when wearing. i've never found a comfortable backpack and this one has all the supports and storage needed. I also loved the color options and the look of the backpack as well!`, `Jessie`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 5, `LuViT!`, `Will be using this for college`, `Sonia`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 5, `Great fr College Students`, `Great fr College Students
`, `Kayla`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 5, `Perfect for College Student`, `Spacious and very comfortable. Fits all my college essentials and keeps me very well organized.`, `Karla`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 5, `Super cute and super in style`, `It's so hard to find a white/cream colored backpack. This is so beautiful and has a sheen in the fabric. Very sturdy and rose gold accents throughout. So elegant yet sporty for school and lugging around girly stuff. Perfectly matches all my Lululemon fit in bone color. This was a hard find but a perfect match. Love!!!`, `Patricia`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 3, `Not enough room...`, `This is an attractive backpack, but as others have said (here and on Google reviews)- this backpack is way too small for work/school, unless you don't use a laptop case/sleeve or don't pack books.`, `toosmall`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 5, `I would definitely recommend!`, `My daughter will be using this for her freshman year in high school. There are so many pockets and space for her things. It's also very pretty!`, `Pam`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 4, `Love the backpack! I would buy it again in a heartbeat.`, `I really love this backpack and am very happy with my purchase. The color is gorgeous, and it sits on my back in a way that makes the load feel lighter. The ONLY reason that I didn't give it 5 stars is because I would have liked if it had a zippered pocket or two in the larger part of the bag.`, `Hope`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 5, `Gave as a gift and want one for myself!", "I gave this as a gift to my friend and she loved it! She was looking for something to upgrade her current backpack and loves the color detail on the jester backpack. It's very roomy.`, `Malina`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 2, `Disappointed`, `I wanted to replace my Jester that I bought in 2020. Since then the product has been redesigned and it no longer serves my needs. I went to place my 15 inch laptop in the laptop sleeve of the new bag (it fits comfortably in the old one) and it got jammed. They also removed a velcro pocket in the front. I'm extremely disappointed and will be returning.`, `Arianna`);
INSERT INTO reviews (productId, rating, ratingTitle comment, userName) VALUES (productId, 4, `I highly recommend this product.`,`Love in it. The straps along the back adds so much flexibility… which was helpful when traveling from the USA to Portugal.`, `thomas`);
 

INSERT INTO products (name, description, price, imageUrl, averageRating) VALUES (`Women's Jester Luxe Backpack", `Our classic Women’s Jester pack—now available in a Luxe edition with premium metallic accents—has a padded laptop sleeve, simplified organization, and can stand up completely unsupported. It’s also endorsed by the American Chiropractic Association.`, 80.00, https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0, 4.25);
INSERT INTO products (name, description, price, imageUrl, averageRating) VALUES ();