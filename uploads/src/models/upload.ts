import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface UploadAttrs {
  fileName: string;
  destination: string;
  userId: string;
  status: string;
}

interface UploadDoc extends mongoose.Document {
  fileName: string;
  destination: string;
  userId: string;
  version: number;
  status: string;
}

interface UploadModel extends mongoose.Model<UploadDoc> {
  build(attrs: UploadAttrs): UploadDoc;
}

const ticketSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    destination: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
ticketSchema.set('versionKey', 'version');
ticketSchema.plugin(updateIfCurrentPlugin);

ticketSchema.statics.build = (attrs: UploadAttrs) => {
  return new Ticket(attrs);
};

const Ticket = mongoose.model<UploadDoc, UploadModel>('Ticket', ticketSchema);

export { Ticket };
