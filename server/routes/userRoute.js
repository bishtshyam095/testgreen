const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/** 
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication operations
 * 
 * components:
 *   schemas:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - email
 *              - password
 *          properties:
 *              name:
 *                  type: string
 *                  description: User's name
 *              email:
 *                  type: string
 *                  format: email
 *                  description: User's email address
 *              password:
 *                  type: string
 *                  format: password
 *                  description: User's password
 *      ErrorResponse:
 *          type: object
 *          properties:
 *              code:
 *                  type: string
 *                  description: Error code
 *              message:
 *                  type: string
 *                  description: Error message
 * 
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;