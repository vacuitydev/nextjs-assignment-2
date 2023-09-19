--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2023-09-19 09:39:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16415)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    name text,
    description text,
    slug text NOT NULL,
    long_description text
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16414)
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.items_id_seq OWNER TO postgres;

--
-- TOC entry 3314 (class 0 OID 0)
-- Dependencies: 209
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.items_id_seq OWNED BY public.item.id;


--
-- TOC entry 3163 (class 2604 OID 16418)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);


--
-- TOC entry 3308 (class 0 OID 16415)
-- Dependencies: 210
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item (id, name, description, slug, long_description) VALUES (2, 'Muffins & Cookies', 'The softest', 'muffins-and-cookies', '## Explore the World of Muffins at [Your Brand Name]

Sink your teeth into pure indulgence with our delectable muffin collection. At [Your Brand Name](#), we''ve mastered the art of creating "The Softest" muffins, each a delightful masterpiece that promises a melt-in-your-mouth experience.

### The Epitome of Softness

Our muffins are not just soft; they are the epitome of softness. With every bite, you''ll encounter a pillowy, tender crumb that practically dissolves on your palate. "The Softest" muffins are a testament to our unwavering commitment to delivering the ultimate in taste and texture.

### Irresistible Flavors

Prepare your taste buds for a journey of flavor. [Your Brand Name](#) offers a diverse array of muffin flavors, from classic blueberry bursting with juicy berries to rich chocolate chip oozing with decadent morsels. Whether you crave a sweet morning treat or a satisfying afternoon snack, our muffins have a flavor to suit every mood.

### Baked to Perfection

Crafted with precision and care, each muffin in our collection is baked to perfection. We use the finest ingredients, ensuring that every muffin boasts a delightful aroma, a golden-brown crown, and that trademark softness that keeps you coming back for more.

### Tradition Meets Innovation

At [Your Brand Name](#), we honor traditional baking methods while embracing innovation to create muffins that stand the test of time. Our recipes are a fusion of time-honored techniques and contemporary culinary excellence.

### Join the [Your Brand Name](#) Muffin Adventure

Experience the sheer pleasure of savoring "The Softest" muffins. Whether you''re enjoying one with your morning coffee or sharing a box with loved ones, [Your Brand Name](#) muffins elevate every moment into a blissful celebration of taste and texture.

### Elevate Your Muffin Experience

Discover the difference that "The Softest" muffins can make in your day. Dive into our muffin collection today, and let your taste buds revel in the luxury of pure softness.
');
INSERT INTO public.item (id, name, description, slug, long_description) VALUES (3, 'Sweet things', 'The sweetest of them all', 'sweet-things', '## Indulge in the Sweetest of Them All at [Your Brand Name]

Treat yourself to a world of sweetness with our irresistible collection of confections and treats. At [Your Brand Name](#), we pride ourselves on being "The Sweetest of Them All," offering you a delectable assortment of sugary delights that will satisfy every craving.

### A Symphony of Sweetness

Prepare to embark on a journey of flavor as we curate the most exquisite array of sweet treats. From velvety chocolates to delicate pastries, our selection is a symphony of sweetness, each bite a harmonious blend of flavors, textures, and sheer delight.

### The Art of Sweet Crafting

Craftsmanship is at the heart of everything we create. Every sweet indulgence at [Your Brand Name](#) is a masterpiece, meticulously crafted to perfection. Our confectioners and pastry chefs pour their expertise and passion into every creation, ensuring that you experience the art of sweet crafting in each bite.

### The Sweetest of Them All

Our commitment to delivering "The Sweetest of Them All" is unwavering. Every sweet treat is made with the finest ingredients, resulting in a symphony of sweetness that dances on your taste buds. We take pride in setting the gold standard for sweetness.

### Tradition Meets Innovation

At [Your Brand Name](#), we combine time-honored recipes with innovative techniques to push the boundaries of sweet perfection. Our confections pay homage to tradition while embracing the excitement of innovation.

### Join the [Your Brand Name](#) Sweet Journey

Whether you''re celebrating a special occasion, gifting a loved one, or simply indulging in a moment of self-pampering, [Your Brand Name](#) is your passport to a world of sweetness. Join us on this delectable journey as we redefine the art of sweetness.

### Elevate Your Sweet Experience

Discover the joy of indulging in "The Sweetest of Them All." Dive into our sweet collection today and experience the magic of pure, unadulterated sweetness in every bite.
');
INSERT INTO public.item (id, name, description, slug, long_description) VALUES (4, 'Donuts', 'The specialest donuts', 'donuts', '## Experience the Specialest Donuts at [Your Brand Name]

Dive into a world of unparalleled delight with our extraordinary collection of donuts. At [Your Brand Name](#), we''re proud to present "The Specialest Donuts" - a unique blend of creativity and flavor that redefines the donut experience.

### A World of Imagination

Our donuts are more than just pastries; they''re edible works of art. Each creation is a canvas for imagination, where flavors and toppings come together to form a symphony of taste and visual appeal. Prepare to be captivated by the world of "The Specialest Donuts."

### Crafting Perfection

Craftsmanship is at the core of our donut-making process. Our talented bakers pour their passion and expertise into every batch, ensuring that each donut is a masterpiece of texture and taste. From the dough''s delicate rise to the final drizzle of glaze, we pay meticulous attention to detail.

### The Specialest Flavor Journey

Experience a flavor journey like no other. Our donuts range from classic favorites like glazed and powdered sugar to innovative creations that push the boundaries of sweet and savory. Each bite is a revelation, a testament to our dedication to offering you the specialest flavors.

### Tradition Meets Innovation

At [Your Brand Name](#), we bridge the gap between tradition and innovation in donut-making. Our recipes are rooted in time-honored techniques, but we''re not afraid to experiment with exciting new flavors and textures.

### Join the [Your Brand Name](#) Donut Adventure

Your taste buds are invited to join us on a delectable adventure. Whether you''re indulging in a single donut or sharing a box of assorted delights, [Your Brand Name](#) brings a touch of wonder to every moment.

### Elevate Your Donut Experience

Discover the enchantment of "The Specialest Donuts." Dive into our donut collection today and prepare to be transported to a world where every bite is a celebration of sweetness, creativity, and pure joy.
');
INSERT INTO public.item (id, name, description, slug, long_description) VALUES (1, 'Breads', 'Delight in Our Freshly Baked Artisanal Breads!', 'breads', '## Discover the Art of Artisanal Breads at [Your Brand Name]

Indulge in a world of exquisite flavors and unmatched craftsmanship with our handcrafted artisanal bread collection. At [Your Brand Name](#), we take pride in the time-honored tradition of bread-making, where every loaf is a work of culinary artistry.

### The Art of Baking

Our journey begins with the finest, meticulously sourced ingredients. We believe that exceptional bread starts with the basics – flour, water, yeast, and a touch of passion. Our artisan bakers skillfully transform these humble elements into a symphony of textures and tastes that dance on your palate.

### A Symphony of Flavors

Delight your senses as you explore our diverse range of artisanal breads. From classic baguettes with their golden, crisp crusts and airy interiors to rustic country loaves that transport you to the heart of traditional European bakeries, our selection is a celebration of flavor. Savor the nuttiness of our whole grain varieties, or experience the subtle sweetness of our brioche, each designed to elevate your culinary creations.

### Handcrafted with Love

What sets our artisanal breads apart is the artisan''s touch. Each loaf is carefully shaped by hand, allowing for the perfect balance of texture and taste. Our bakers pour their expertise and dedication into every step, from the initial mix to the final bake, ensuring that you experience the true essence of artisanal craftsmanship in every bite.

### A Slice of Tradition

At [Your Brand Name](#), we believe that bread is more than sustenance; it''s a connection to tradition and culture. Our breads honor time-tested methods, ensuring that you enjoy the flavors of the past with the convenience of today.

### Join the [Your Brand Name](#) Bread Experience

Whether you''re crafting a gourmet sandwich, enjoying a cozy family meal, or simply savoring a slice with your favorite spread, our artisanal breads are your gateway to a world of culinary possibilities. Elevate your dining experience with the unforgettable taste of our handcrafted loaves.

### Experience the Difference

With every bite, you''ll taste the dedication, passion, and artistry that goes into each loaf of bread at [Your Brand Name](#). Explore our artisanal bread collection today and discover the joy of savoring bread the way it was meant to be.
');


--
-- TOC entry 3315 (class 0 OID 0)
-- Dependencies: 209
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.items_id_seq', 4, true);


--
-- TOC entry 3165 (class 2606 OID 16422)
-- Name: item items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- TOC entry 3167 (class 2606 OID 16426)
-- Name: item unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "unique" UNIQUE (slug);

