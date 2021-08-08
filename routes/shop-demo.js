var express = require('express');
var shopDemoModel = require('../models/shop-demo');
var basicAuth = require('../models/basic-auth');
var router = express.Router();

router.get('/api/users', function (req, res, next) {
    let userList = shopDemoModel.userList();
    let valid = basicAuth.authenticate(req);
    if (valid) {
        if (userList.length != 0) {
            res.json(userList);
        } else {
            res.status(204).json({ status: 204, message: 'No content!' });
        }
    } else {
        res.status(401).json({ status: 401, message: 'Access Denied!' });
    }
})

router.post('/api/users', function (req, res, next) {
    let success = shopDemoModel.addUser(req);
    let valid = basicAuth.authenticate(req);
    if (valid) {
        if (success) {
            res.status(201).json({ status: 201, message: 'Add user success!' });
        } else {
            res.status(400).json({ status: 400, message: 'Bad request!' })
        }
    } else {
        res.status(401).json({ status: 401, message: 'Access Denied!' });
    }
})

router.get('/adduser', function (req, res, next) {
    res.render('shop-demo-addUser', { home: '/shop-demo', users: '/shop-demo/users', addUser: '/shop-demo/adduser'})
})

router.post('/adduser', function(req, res, next){
    let data = res.body;
    console.log(data);
})

router.get('/search/:string', function (req, res, next) {
    let stringParams = req.params.string;
    let search = shopDemoModel.search(stringParams);
    let valid = basicAuth.authenticate(req);
    if (valid) {
        if (search.length != 0) {
            res.status(200).json(search);
        } else {
            res.status(204).json({ status: 204, message: 'No content!' });
        }
    } else {
        res.status(401).json({ status: 401, message: 'Access Denied!' });
    }
})

router.get('/users', function (req, res, next) {
    let data = shopDemoModel.userList();
    res.render('shop-demo-users', { home: '/shop-demo', users: '/shop-demo/users', addUser: '/shop-demo/adduser', userList: data });
})

router.get('/', function (req, res, next) {
    res.render('shop-demo-home', { home: '/shop-demo', users: '/shop-demo/users', addUser: '/shop-demo/adduser' });
})

module.exports = router;