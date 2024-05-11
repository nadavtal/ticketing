import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@ntatickets/common';
// import { Ticket } from '../models/ticket';
// import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
// import { natsWrapper } from '../nats-wrapper';
const router = express.Router();

router.post(
  '/api/uploads',
  // requireAuth,
  // [
  //   body('title').not().isEmpty().withMessage('Title is required'),
  // ],
  // validateRequest,
  async (req: Request, res: Response) => {
    const { fileName, destination } = req.body;
    console.log({ fileName, destination });
    // const ticket = Ticket.build({ title, price, userId: req.currentUser!.id });
    // await ticket.save();
    // new TicketCreatedPublisher(natsWrapper.client).publish({
    //   id: ticket.id,
    //   version: ticket.version,
    //   title: ticket.title,
    //   price: ticket.price,
    //   userId: ticket.userId,
    // });

    // res.status(201).send(ticket);
  }
);

export { router as uploadsRouter };
