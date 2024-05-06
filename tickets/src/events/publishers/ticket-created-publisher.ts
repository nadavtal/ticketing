import { Publisher, Subjects, TicketCreatedEvent } from '@ntatickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}