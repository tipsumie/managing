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

### Admin credetial

begin this command at project root directory

```bash
{
  "email": "salary-hero",
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

| API           | HTTP Method | headers | req.body | response | Description |
| ------------- | ----------- | ------- | -------- | -------- | ----------- |
| /api/register | POST        | -       | {        |

    "username":"Rm",
    "email":"rm@gmail.com",
    "password":"123123"

| }                 | Register Successfully | Register  |
| ----------------- | --------------------- | --------- | --- | --- | -------------------- |
| /api/login        | POST                  | -         | 290 | 286 | Login to the app     |
| ---               | ---                   | ---       | --- | --- | ---                  |
| /api/product      | POST                  | authtoken | 290 | 286 | Create a product     |
| ---               | ---                   | ---       | --- | --- | ---                  |
| /api/products     | GET                   | authtoken | 290 | 286 | Find all product     |
| ---               | ---                   | ---       | --- | --- | ---                  |
| /api/products/:id | GET                   | authtoken | 290 | 286 | Find a product by id |
| ---               | ---                   | ---       | --- | --- | ---                  |
| /api/product/:id  | PATCH                 | authtoken | 290 | 286 | Update a product     |
| ---               | ---                   | ---       | --- | --- | ---                  |
| /api/product/     | DELETE                | authtoken | 290 | 286 | Delete a product     |
