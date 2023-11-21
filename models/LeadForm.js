import mongoose from 'mongoose';

const leadFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    query: { type: String, required: true },
    massage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const LeadForm =
  mongoose.models.LeadForm || mongoose.model('LeadForm', leadFormSchema);
export default LeadForm;
