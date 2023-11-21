import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: { type: String },
    token: { type: String, default: false },
    isAdmin: { type: Boolean, required: true, default: false },
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
