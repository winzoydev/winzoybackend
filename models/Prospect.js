import mongoose from 'mongoose';

const prospectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    reference: { type: String },
    status: { type: String },
    collage: { type: String },
    course: { type: String },
    remark: [
      {
        name: { type: String },
        message: { type: String },
        date: { type: String },
      },
    ],
    date: { type: String },
    // end_date: { type: String },
  },
  {
    timestamps: true,
  }
);
const Prospect =
  mongoose.models.Prospect || mongoose.model('Prospect', prospectSchema);
export default Prospect;
