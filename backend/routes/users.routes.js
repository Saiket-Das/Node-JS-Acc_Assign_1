const express = require('express');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();



router
    /** 
     * @api {get} /random - A random user
     * @apiDescription Get any random user 
     
     * @apiSucess {Object} Random user's information
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
     * @api {post} /save - Save a user 
     * @apiDescription Save a user 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/save').post(userControllers.saveUser)


router
    /** 
     * @api {pacth} /update - Update a user's information
     * @apiDescription Update a user's information
     
     * @apiSucess {Object}  User's information
     **/
    .route('/update').patch(userControllers.updateUser)

router
    /** 
     * @api {pacth} /update - Update a user's information
     * @apiDescription Update a user's information
     
     * @apiSucess {Object}  User's information
     **/
    .route('/bulk-update').patch(userControllers.updateMulitpleUser)


router
    /** 
     * @api {delete} /delete - Delete a user
     * @apiDescription Delete a user 
     
     * @apiSucess {Object[]}  New users 
     **/
    .route('/delete').delete(userControllers.deleteUser)

module.exports = router;