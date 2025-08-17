const {PORT,DB_URL,JWT_SECRET} = process.env;


module.exports = {
    port : PORT,
    db_url: DB_URL,
    jwt_secret:JWT_SECRET
}