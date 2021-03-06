import S3 from "aws-sdk/clients/s3";
import fs from "fs";
require("dotenv").config();

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
export function uploadFile(path: string, filename: string) {
  const fileStream = fs.createReadStream(path);
  const uploadParams: S3.PutObjectRequest = {
    Bucket: bucketName ? bucketName : "",
    Body: fileStream,
    Key: filename,
  };
  return s3.upload(uploadParams).promise();
}

// downloads a file from s3
export function getFileStream(fileKey: string) {
  const downloadParams: S3.GetObjectRequest = {
    Key: fileKey,
    Bucket: bucketName ? bucketName : "",
  };

  return s3.getObject(downloadParams).createReadStream();
}
