const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})


async function uploadFile(buffer) {

    console.log(buffer);

    const file = await imagekit.files.upload({
        file: buffer.toString('base64'), //required   
        fileName: "images.jpg"//required
    })
    return file;
}

module.exports = uploadFile;