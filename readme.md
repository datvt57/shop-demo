Hi! Everyone!

This is my home project shop-demo
This front-end using Jade engine with Express JS Framework 
This project has 3 tabs for 3 different function
Besides this project has 2 routes API are
- /shop-demo/api/user (get/post) (get for list and post for add more user)
- /shop-demo/search/:string (string is name you want to search).
All this API routes have Basic Authenticate with encode base64 signature (username: test, password: 123456) 
You can use Postman for all this api routes.

Before you can run this project at localhost, make sure you have import my database data
my database info:
- name: shop-demo
- use Mysql80
- localhost
- port 3306
- user root
- pass 123456
You can change this info at models/database.js

To run this project just type this command at my project folder: npm start
And start my home page at localhost:3000/shop-demo