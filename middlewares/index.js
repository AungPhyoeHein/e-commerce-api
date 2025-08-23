const errorHandler = require('./errorHandler.js');
const isAdmin=require('./isAdmin.js');
const authMiddleware=require('./authMiddleware.js');

module.exports = {errorHandler,isAdmin,authMiddleware};