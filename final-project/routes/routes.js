var express = require('express');
var router = express.Router();

var contactController = require('../controllers/contactController');

//list contacts
router.get('/list', contactController.get_all_contacts);

//search contact
router.get('/search', contactController.get_search);
router.post('/search', contactController.post_search);

//register
router.get('/register', contactController.get_register);
router.post('/register', contactController.post_register);

//remove
router.post('/remove', contactController.get_remove);

//update
router.get('/update', contactController.get_update);
router.post('/update', contactController.post_update);
router.post('/updated', contactController.post_updated);

module.exports = router;