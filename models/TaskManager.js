import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    task: [
      {
        data: {
          title: { type: String, required: true },
          message: { type: String },
        },
        status: { type: Number, default: 0 },
        date: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
