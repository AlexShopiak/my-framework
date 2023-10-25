const Router = require('../framework/router.js');
const controller = require('./user-controller.js');
const router = new Router();

router.get('/users', controller.getUsers);
router.post('/users', controller.createUsers);
router.put('/users', controller.putUser);
router.delete('/users', controller.deleteUsers);

module.exports = router;