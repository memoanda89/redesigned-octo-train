 

   module.exports = function (options) {
    return function (req, res, next) {
        if(req.id==55 || 100 ){
            next()
        }else{
            res.send(401, "Unauthorized");
        }
       
    }
  }
  