import mongoose from 'mongoose';

const notepadData = new mongoose.Schema(
  {
    email: { type: String, required: true },
    data: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const NotepadData =
  mongoose.models.NotepadData || mongoose.model('NotepadData', notepadData);
export default NotepadData;
