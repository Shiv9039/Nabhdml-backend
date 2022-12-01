const express = require('express');
const router = express.Router();
const { registerStudent, loginStudent, getStudentsCount, singleStudentDetail, studentDetails } = require('../controllers/studentController');

/**
 * @swagger
 *  components:
 *      schemas:
 *          students:
 *              type: object
 *              properties:
 *                  success:
 *                      type: boolean
 *                  user: 
 *                      type: object
 *                      properties:
 *                          firstName:
 *                              type: string
 *                          lastName:
 *                              type: string
 *                          fatherName:
 *                              type: string
 *                          motherName:
 *                              type: string
 *                          dob:
 *                              type: date
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          mobileNumber:
 *                              type: string
 *                          className:
 *                              type: string
 *                          gender:
 *                              type: string
 *                          currentSessionId:
 *                              type: string
 *                  token:
 *                      type: string
 */

/**
 * @swagger
 *  /register/student:
 *      post:
 *          tags:
 *              - Student api
 *          summary: This api register Student
 *          description: This api takes Student data in a json format through request body then register student in students collection.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              firstName:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              fatherName:
 *                                  type: string
 *                              motherName:
 *                                  type: string
 *                              dob:
 *                                  type: date
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              mobileNumber:
 *                                  type: string
 *                              className:
 *                                  type: string
 *                              gender:
 *                                  type: string
 *                              currentSessionId:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#components/schemas/students'
 */
 router.route('/register/student').post(registerStudent);

/**
 * @swagger
 *  /login/student:
 *      post:
 *          tags:
 *              - Student api
 *          summary: This api login Student
 *          description: This api takes Student data in a json format through request body it check if student email and password match to any document then student can login.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#components/schemas/students'
 *              500:
 *                  description: successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                  message:
 *                                      type: string
 */
router.route('/login/student').post(loginStudent);

/**
 * @swagger
 *  /studentsCount:
 *      get:
 *          tags:
 *              - Student api
 *          summary: Get total number of students in school
 *          description: This api get total number of students in school.
 *          responses:
 *              200:
 *                  description: Successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                  count:
 *                                      type: integer
 *              404:
 *                  description: Variable mismatch or maybe url not match
 */
router.route('/studentsCount').get(getStudentsCount);

/**
 * @swagger
 * /single/student/detail/{_id}:
 *      get:
 *          tags:
 *              - Student api
 *          summary: It gets the student detail
 *          description: It gets the complete deatils single student on the basis of _id
 *          parameters:
 *              -   in: path
 *                  name: _id
 *                  required: true
 *                  description: Give unique object id to parameter.
 *          responses:
 *              200:
 *                  description: Successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                  details:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              firstName:
 *                                                  type: string
 *                                              lastName:
 *                                                  type: string
 *                                              fatherName:
 *                                                  type: string
 *                                              motherName:
 *                                                  type: string
 *                                              dob:
 *                                                  type: string
 *                                              email:
 *                                                  type: string
 *                                              mobileNumber:
 *                                                  type: string
 *                                              className:
 *                                                  type: string
 *                                              gender:
 *                                                  type: string
 *                                              currentSessionId:
 *                                                  type: string
 *              404:
 *                  description: Variable mismatch or maybe url not match
 */
router.route('/single/student/detail/:_id').get(singleStudentDetail);

/**
 * @swagger
 * /All/students/details:
 *      get:
 *          tags:
 *              - Student api
 *          summary: It gets the student detail of whole school
 *          description: It gets the complete details of all students of school
 *          parameters:
 *              -   in: path
 *                  name: _id
 *                  required: true
 *                  description: Give class unique object id to parameter.
 *          responses:
 *              200:
 *                  description: Successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                  details:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              firstName:
 *                                                  type: string
 *                                              lastName:
 *                                                  type: string
 *                                              fatherName:
 *                                                  type: string
 *                                              motherName:
 *                                                  type: string
 *                                              dob:
 *                                                  type: string
 *                                              email:
 *                                                  type: string
 *                                              mobileNumber:
 *                                                  type: string
 *                                              className:
 *                                                  type: string
 *                                              gender:
 *                                                  type: string
 *                                              currentSessionId:
 *                                                  type: string
 *              404:
 *                  description: Variable mismatch or maybe url not match
 */
router.route('/All/students/details').get(studentDetails);

module.exports = router;