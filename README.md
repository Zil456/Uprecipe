# #Uprecipe

Is an app to look up various recipes as well as add your own ones. All recipes are fetched from an external API. All recipes which users add manually are stored in the MongoDB database. 
![image](https://user-images.githubusercontent.com/97742253/213912091-368ec39c-fe76-4aad-8ecd-b418c53f91fc.png)
![image](https://user-images.githubusercontent.com/97742253/213912011-bdce9428-bc42-4e9b-9a4d-4bad4abafc1d.png)
![image](https://user-images.githubusercontent.com/97742253/213912071-1a40d3c1-78ba-41ba-ba44-17f0bfcc685e.png)


# Getting started with the server
Before you continue with the installation make sure you have: Node and npm installed on your machine. You should also have MongoDB installed.

# Installation

Clone the repo

```
git clone https://github.com/Zil456/Uprecipe.git
cd Uprecipe
```


In Node, you will need to install the following dependencies:

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
