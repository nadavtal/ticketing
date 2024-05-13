const multer = require("multer");
const multerS3 = require('multer-s3');
const tmpPath = "./resources/static/assets/tmp/"
const unzipPath = "./resources/static/assets/unzipped/"
const { S3Client } = require('@aws-sdk/client-s3')
const fs = require('fs');

const s3 = new S3Client()
function createMulterStorage(tmpDir) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = tmpDir + req.params.folderId;
      try {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
          console.log("Directory is created.", dir);
        }
      } catch (err) {
        throw(err);
      }
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
}
const multerTmpStorage = multer(
  { 
    storage: createMulterStorage(tmpPath),
    limits: { fileSize: 1000000 * 1000 * 10 }
  })
const multerZipStorage = multer(
  { 
    storage: createMulterStorage(unzipPath),
    limits: { fileSize: 1000000 * 1000 * 10 }
  })
  const uploadmulterS3 = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'future-fearue',
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  }) 
// const multerStorageUpload = multer({ storage: storage })

module.exports = {
  multerTmpStorage,
  multerZipStorage,
  tmpPath,
  unzipPath,
  uploadmulterS3
};