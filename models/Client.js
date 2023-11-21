const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    reference: { type: String },
    college: { type: String },
    course: { type: String },
    document: [{ name: { type: String }, url: { type: String } }],
    paymentInfo: {
      applicationFee: { type: Number },
      materialFee: { type: Number },
      tuitionFee: { type: Number },
      offer: { type: Number },
      otherFee: { type: Number },
    },
    paymentHistory: [
      {
        particular: { type: String },
        date: { type: String },
        amount: { type: Number },
      },
    ],
    offerDetails: [
      {
        name: { type: String },
        standardDuration: { type: String },
        commencementDate: { type: String },
        expectedDate: { type: String },
        materialFee: { type: Number },
        tuitionFee: { type: Number },
      },
    ],
    installmentSchedule: [
      {
        studyPeriod: { type: Number },
        dueDate: { type: String },
        applicationFee: { type: Number },
        materialFee: { type: Number },
        tuitionFee: { type: Number },
        totalNetAmount: { type: Number },
      },
    ],
    remark: [
      {
        name: { type: String },
        message: { type: String },
        date: { type: String },
      },
    ],
    date: { type: String },
  },
  {
    timestamps: true,
  }
);
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
