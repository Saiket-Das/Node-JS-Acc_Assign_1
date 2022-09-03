const express = require('express');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();



router
    /** 
     * @api {get} /random - Random user
     * @apiDescription get Any random user 
     
     * @apiSucess {Object[]} random user
     **/
    .route('/random').get(userControllers.randomUser)


router
    /** 
     * @api {get} /all - All users 
     * @apiDescription get All users 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/all').get(userControllers.getAllUser)


router
    /** 
     * @api {get} /all - All users 
     * @apiDescription get All users 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/save').post(userControllers.saveUser)


module.exports = router;