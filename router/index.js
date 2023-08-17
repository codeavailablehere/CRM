const router = require('express').Router();
const companyController = require('../controller/addCompany');
const userController = require('../controller/user');
const subdepartmentController = require('../controller/subdepartment');

router.post('/add-company', companyController.addCompany);
router.get('/get-company', companyController.getCompany);
router.put('/update-department/:id', companyController.update);
router.delete('/delete-department/:id', companyController.delete);
// User Controller
router.post('/login', userController.userLogin);

//Sub department

router.post('/add-subdepartment', subdepartmentController.addsubdepartment);
router.get('/get-subdepartment', subdepartmentController.getsubdepartment);
router.put(
  '/update-sub-department',
  subdepartmentController.updatesubdepartment
);
router.delete(
  '/delete-sub-department',
  subdepartmentController.deletesubdepartment
);

module.exports = router;
