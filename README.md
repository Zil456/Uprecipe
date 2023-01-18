# Uprecipe

An app to look up various recipes as well as add your own ones.

# Getting started with the server

In node, you will need to install the following dependencies:

```
axios
cors
express
mongoose
nodemon
```

# Getting started with the database

The app uses MongoDb. Therefore, you will need MongoDB installed and running. I also used mongoose alongside MongoDB.

# API

This app uses an external api which can be found here: https://rapidapi.com/edamam/api/recipe-search-and-diet
You will need to create an account and subscribe to use it. It is FREE for up to 1000 requests per month.

# Authentication

This app uses Auth0 for authentication. You will need to create an account here https://auth0.com/ to use this service. It is FREE. Once you have done so, you will receive a domain and a client id. Both of them will need to be inserted in the .env file.
