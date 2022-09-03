const express = require('express');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();



router.route('/')

    /** 
       * @api {get} /user - All users 
       * @apiDescription get All users 
       * @apiPermission Admin
       * 
       * @apiHeader {strinf} Authorization - User's access token 
       * @apiParam {Number(1-0)}  Individual users
       * 
       * @apiSucess {Object[]}  All the users
       * 
       * @apiError {Unauthorization 401} Unauthorized      Only Authenticated Users can access the data. 
       * @apiError {Forbidden 403} Forbidden      Only Admin users can access the data
    **/
    .get(userControllers.getAllUser)

//     .post(userControllers.addNewUser)



// router.route('/:id')
//     .get(userControllers.getSpecificUser)
//     .patch(userControllers.updateUser)
//     .delete(userControllers.deleteUser)


module.exports = router;