import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@ntatickets/common';
// import multer from 'multer';
// import multerS3 from 'multer-s3';

const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

// import { Ticket } from '../models/ticket';
// import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
// import { natsWrapper } from '../nats-wrapper';
const router = express.Router();
// const app = express();
// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('ams3.digitaloceanspaces.com');
console.log(process.env.S3_STORAGE_ACCESS_KEY_ID)
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.S3_STORAGE_ACCESS_KEY_ID, 
  secretAccessKey: process.env.S3_STORAGE_ACCESS_SECRET
});
// console.log("S3", s3);
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'future-feature',
    acl: 'public-read',
    key: function (request: Request, file: any, cb: any) {
      console.log("multer file", file);
      cb(null, file.originalname);
    }
  }),
  limits: { fileSize: 1000000 * 1000 * 10 }
}).array('file', 1);
router.post('/api/uploads', function (request, response, next) {
  // console.log("BODYYYY", request.body);
  // console.log(request.files)
  upload(request, response, function (error: any) {
    if (error) {
      console.log(error);
      response.send(error)
      return
      // return response.redirect("/error");
    }
    console.log('File uploaded successfully.');
    response.send('File uploaded successfully.');
    // response.redirect("/success");
  });
});
// router.post('/api/uploads', function (request, response, next) {
//   upload(request, response, function (error: any) {
//     if (error) {
//       console.log(error);

//     }
//     console.log('File uploaded successfully.', request.body);
//     response.send('File uploaded successfully.');
//   });
//   // response.send('File uploaded successfully.');
// });
// router.post(
//   '/api/uploads',
//   // requireAuth,
//   // [
//   //   body('title').not().isEmpty().withMessage('Title is required'),
//   // ],
//   // validateRequest,
//   async (req: Request, res: Response) => {
//     // const { fileName, destination } = req.body;
//     console.log("BODYYYY", req.body);
//     // const ticket = Ticket.build({ title, price, userId: req.currentUser!.id });
//     // await ticket.save();
//     // new TicketCreatedPublisher(natsWrapper.client).publish({
//     //   id: ticket.id,
//     //   version: ticket.version,
//     //   title: ticket.title,
//     //   price: ticket.price,
//     //   userId: ticket.userId,
//     // });

//     // res.status(201).send(ticket);
//   }
// );

export { router as uploadsRouter };
