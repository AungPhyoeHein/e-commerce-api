const print = require("console").log;
const fs = require("fs");

const errorHandler = (error, req, res, next) => {
  const code = res.code ? res.code : 500;
  if (code == 500) {
    fs.appendFile(
      "./logs/log.txt",
        `Message : ${error.message}\nURL Path: ${req.originalUrl}\nStack : ${error.stack}\n\n\n\n`,
      (error) => {
        if (error) {
          print("[-] Error when try to write error log.");
        }
      }
    );
  }
  res
    .status(code)
    .json({ code, status: false, msg: error.message, stack: error.stack });
};

module.exports = errorHandler;
