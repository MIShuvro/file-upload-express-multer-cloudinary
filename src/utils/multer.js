const multer = require('multer')


const storage = multer.memoryStorage();
const fileStorage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


module.exports = multer({ storage: fileStorage }).single('cover')