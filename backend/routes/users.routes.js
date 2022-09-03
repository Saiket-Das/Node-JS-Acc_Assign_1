const express = require('express');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();



router
    /** 
     * @api {get} /random - A random user
     * @apiDescription Get any random user 
     
     * @apiSucess {Object[]} Random user's 
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
     * @api {save} /save - Save a user 
     * @apiDescription Save a user 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/save').post(userControllers.saveUser)


router
    /** 
     * @api {save} /save - Save a user 
     * @apiDescription Save a user 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/update').patch(userControllers.updateUser)

module.exports = router;