# ecommerce_backend

An assignment practicing routing using sequelize and the Model-Views-Controllers framework of organization to simulate CRUD functionality in Insomia utilizing HTTP verbs GET, POST, PUT, DELETE. 

## Description

This is a demonstration of how one has the ability to create, read, update, and delete products, categories and tags from a simulated ecommerce backend. This is an exercise in routing using express and models generated using the node package Sequelize, which uses mySQL dialect to create objects from pre-defined table structure in their respective js files. Essentially, it is a demonstration showing what would happen on the back end if a user wanted to add products to their store, view them, update them or delete them and having the option to do this through the product itself, its category or its tags. 

## Table of Contents

1. [Team](#team)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Bugs](#bugs)
6. [Questions](#questions)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

## Team

---

Starter code was provided by edEx bootcamps. I added the most basic things I could figure out and some comments. 

_Other tools utilized:_

Node.js: https://nodejs.org/en

dotenv:https://www.npmjs.com/package/dotenv

Sequelize:https://www.npmjs.com/package/sequelize

mySQL2: https://www.npmjs.com/package/mysql2

Express:https://www.npmjs.com/package/express

Insomnia or another API development system is needed, these may be run in browser or downloaded for the desktop. Here are a few options: 

Hoppscotch: https://hoppscotch.io/

Postman: https://www.postman.com/

Personally I will be using Insomnia: https://insomnia.rest/

## Installation

---

There is no official installation but users may need to install an api development software such as Insomnia, though there are browser friendly options listed above. 

## Usage

---

User will need to download the code, change the .env or add the .env to include their own mySQL username and password in order to run the code. User should then navigate to the db directory, open up the mySQL shell, run command 'source schema.sql;', then exit the mySQL shell. Navigate back to root directory of application, run command 'node seeds/index.js' in order to seed the tables with the seeds provided in the seeds folder. 

Once seeding is completed, user should run npm start to begin the app and be able to view it in local host. Open up the API development tool of their choice and enter in 'localhost:3001' then using the routes provided, they should be able to view the various aspects of the json from the seeds. 
localhost:3001/api/products/
localhost:3001/api/categories/
localhost:3001/api/tags/
By adding the id numbers after the /, the user may also view specific products, tags or categories as well as update or delete them. 

Video that demonstrates full usage: https://drive.google.com/file/d/1KL15dOgBL8GzHQNsiBTEjHg_OOjvS66W/view?usp=sharing

Second video about how to seed the database: https://drive.google.com/file/d/1lkKVZo51aX0ZDK_AjfWKATfM9gejKT5T/view?usp=sharing
![image of insomnia](/assets/watch%20the%20video%20for%20full%20functionality.png)

## Tests
---

I did not write any tests for this thing as the entire exercise itself is a giant test (of patience).




## Bugs
---

You might get a "bad request" when updating a product with put request, but it will work anyway. 


## Questions
---

Please refer any questions to: janicajackson@gmail.com

**GitHub profile:** https://github.com/janicajensen

## Contribution Guidelines

---

If anyone wishes to contribute to this project, they may find the GitHub repository at https://github.com/JanicaJensen/ecommerce_backend and they are welcome to create a fork.

## License

---

This project is covered under the MIT license.
More info can be found by clicking the badge above the description.


