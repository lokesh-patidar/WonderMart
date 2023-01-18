require('dotenv').config();

const addAdminId = (req,res,next) => {
    if(req.method === "POST" && req.url === "/admin/signup"){
        req.body.adminID = process.env.admin_id;
        console.log(req.body.adminID);
        console.log(req.url);
        next();
    }
    else{
        next();
    }
};

module.exports = {
    addAdminId
}