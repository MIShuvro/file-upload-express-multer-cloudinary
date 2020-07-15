const cloud = require('./utils/cloudinary')


const fileUpload = async (req, res) => {
  
   const result = await cloud.uploads(req.file.path)
   res.send(result)

}

module.exports = fileUpload