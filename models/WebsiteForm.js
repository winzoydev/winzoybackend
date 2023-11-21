import mongoose from 'mongoose';

const websiteForm = new mongoose.Schema(
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
const WebsiteForm =
  mongoose.models.WebsiteForm || mongoose.model('WebsiteForm', websiteForm);
export default WebsiteForm;
