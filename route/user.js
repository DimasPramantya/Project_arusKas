const express = require('express');
const { handlerPostRegistUser, handlerDeleteUser } = require('../handler/user');
const router = express.Router();

router.post('/register',handlerPostRegistUser);
router.get('/',(req,res)=>{
    res.send('halo')
})
router.delete('/delete/:id', handlerDeleteUser)
module.exports = router;