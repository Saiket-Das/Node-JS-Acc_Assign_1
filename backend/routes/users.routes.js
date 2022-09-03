const express = require('express');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();



router
    /** 
     * @api {get} /user - All users 
     * @apiDescription get All users 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/random')
    .get(userControllers.getAllUser)


router
    /** 
     * @api {get} /user - All users 
     * @apiDescription get All users 
     
     * @apiSucess {Object[]}  All the users
     **/
    .route('/all')
    .get(userControllers.getAllUser)


router.route('/all').get(userControllers.getAllUser)



// router.route('/:id')
//     .get(userControllers.getSpecificUser)
//     .patch(userControllers.updateUser)
//     .delete(userControllers.deleteUser)


module.exports = router;