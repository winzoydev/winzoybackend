import mongoose from 'mongoose';

const resgiserFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    college: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);
const ResgiserForm =
  mongoose.models.ResgiserForm ||
  mongoose.model('ResgiserForm', resgiserFormSchema);
export default ResgiserForm;
