const isAdmin = async (req, res, next) => {
  try {
    const user=req.user;
    if (user.role=="OWNER"||user.role=="ADMIN") {
        next();
    } else {
      res.code = 403;
      throw new Error("FORBIDDEN");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = isAdmin;
