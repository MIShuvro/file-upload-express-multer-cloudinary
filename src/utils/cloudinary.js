const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
})

exports.uploads = async (file) => {
    // return new Promise(resolve => {
    //     cloudinary.uploader.upload(file, (result) => {
    //         resolve({ secure_url: result.secure_url, url: result.url, id: result.public_id })
    //     }, { resource_type: "auto" })
    // })

    return await cloudinary.uploader.upload(file, { resource_type: "auto" })
}