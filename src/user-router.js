const Router = require('../framework/router.js');
const controller = require('./user-controller.js');
const router = new Router();

router.get('/users', controller.getUsers);
router.post('/users', controller.createUsers);

module.exports = router;