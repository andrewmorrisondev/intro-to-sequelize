# API Documentation

## Overview
The purpose of this api is to provide RESTful functionality for the `intro-to-sequelize` project. It is built using the express.js framework and is written in JavaScript.

## Base URL

`http://localhost:3001/api/dogs/`

## Authentication

There is no authentication required to use this API.

## Error Handling

If there is an error creating, reading, updating, or deleting a dog, the server will respond with a status code of 500 (Internal Server Error) and the error object as the response body.

## Endpoints

<br>

### Create

#### Description

This will create a new dog in the database.

#### HTTP Method

`POST`

#### Path

`/dogs`

#### Parameters

`body:`

```
{
  "name": "Loki",
  "age": 10,
  "breed": "Cavalier King Charles Spaniel"
}
```

#### Request Example

```
POST /dogs

Body:
{
  "name": "Loki",
  "age": 10,
  "breed": "Cavalier King Charles Spaniel"
}


```

#### Response Example

```
{
    "id": 3,
    "name": "Loki",
    "age": 10,
    "updatedAt": "2023-05-24T18:44:07.034Z",
    "createdAt": "2023-05-24T18:44:07.034Z"
}
```

<br>

### Read

#### Description

This will index all dogs in the database.

#### HTTP Method

`GET`

#### Path

`/dogs`

#### Request Example

```
GET /dogs
```

#### Response Example

```
[
    {
        "id": 1,
        "name": "Bailey",
        "age": 10,
        "createdAt": "2023-05-23T17:48:12.851Z",
        "updatedAt": "2023-05-23T17:48:12.851Z"
    },
    {
        "id": 2,
        "name": "Loki",
        "age": 10,
        "createdAt": "2023-05-24T18:01:38.431Z",
        "updatedAt": "2023-05-24T18:01:38.431Z"
    }
]
```

<br>

### Update

#### Description

This will update a dog in the database.

#### HTTP Method

`PUT`

#### Path

`/dogs/:dogId`

#### Parameters

`body:`

```
{
  "name": "Loki",
  "age": 11,
  "breed": "Cavalier King Charles Spaniel"
}
```

#### Request Example

```
PUT /dogs/2

Body:
{
  "name": "Loki",
  "age": 11,
  "breed": "Cavalier King Charles Spaniel"
}


```

#### Response Example

```
{
    "id": 3,
    "name": "Loki",
    "age": 11,
    "updatedAt": "2023-05-24T18:44:07.034Z",
    "createdAt": "2023-05-24T18:44:07.034Z"
}
```

<br>

### Delete

#### Description

This will delete a dog in the database.

#### HTTP Method

`DELETE`

#### Path

`/dogs/:dogId`

#### Request Example

```
DELETE /dogs/2
```

#### Response Example

```
{
    "id": 2,
    "name": "Loki",
    "age": 11,
    "createdAt": "2023-05-24T18:01:38.431Z",
    "updatedAt": "2023-05-24T18:01:38.431Z"
}
```
