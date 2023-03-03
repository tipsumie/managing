# managing

This repository has been constructed using the MERN stack, which includes MongoDB for the database, Express for the server framework, React for the front-end user interface, and Node.js for the back-end runtime environment.

### Installing and Running the app

begin this command at project root directory

```bash
yarn install  //  To install all dependencies for server side.

yarn dev

cd client

yarn install  //  To install all dependencies for client side.

yarn dev

```

### Setting environment variable

.env file at client directory

```bash
VITE_BASE_URL = 'http://localhost:5001/api'
VITE_BASE_IMAGE_URL = 'http://localhost:5001'
```

.env file at server directory

```bash
PORT=5001
MONGODB_URL='mongodb+srv://managing:RGOQjjeji4mxzm3Y@cluster0.ru32gug.mongodb.net/?retryWrites=true&w=majority'
JWT_SECRET='managing'

CLOUDINARY_CLOUD_NAME='dpqi3rgxd'
CLOUDINARY_CLOUD_API_KEY='392254835253833'
CLOUDINARY_CLOUD_API_SECRET='SSTyCBhV7IF3zcj1IC2rVimP-dg'
```

### Admin credetial

```bash
{
  "email": "admin@gmail.com",
  "password": "123123"
}
```

### Headers

```bash
{
  "authtoken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMDE4ODY4MTE3NjRiYzgxZGI1ODZlIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY3Nzc2ODk5MiwiZXhwIjoxNjc3ODEyMTkyfQ.6MI8SnFWmhq-KHv584dKbmQ0tozIYnF-ues1MAnLWxE",
}
```

### API Document

| API               | HTTP Method | headers   | response                      | Description          |
| ----------------- | ----------- | --------- | ----------------------------- | -------------------- |
| /api/register     | POST        | -         | Register Successfully         | Register             |
| /api/login        | POST        | -         | { token, payload }            | Login to the app     |
| /api/product      | POST        | authtoken | { product }                   | Create a product     |
| /api/products     | GET         | authtoken | {all products }               | Find all product     |
| /api/products/:id | GET         | authtoken | {a product }                  | Find a product by id |
| /api/product/:id  | PATCH       | authtoken | Update A Product Successfully | Update a product     |
| /api/product/     | DELETE      | authtoken | Delete A Product Successfully | Delete a product     |

## Request body

#### Register

```bash
{
    "username":"Jk",
    "email":"jk@gmail.com",
    "password":"123123"
}
```

#### Login

```bash
{
    "email":"rm@gmail.com",
    "password":"123123"
}
```

#### Create a product

select form-data and fill in key-value.

```bash
{
    "name": "Product Name",
    "description": "The best product",
    "image": *select file,
    "price": 550,
}
```

#### Find a product by id

```bash
    "id":"6400586052d9179f2ce4265e"
```

#### Update a product

select form-data and fill in key-value which you need to update.

```bash
{
    "name": "New Product Name",
    "description": "The best product",
    "image": *select file,
    "price": 150,
}
```

#### Delete a product

```bash

   "id":"6400586052d9179f2ce4265e"

```
