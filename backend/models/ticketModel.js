const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    body: { type: String, required: true },
    author: { type: mongoose.Types.ObjectId, required: true }, // objectId => User Model of author
    status: { type: Number, default: 0, required: true }, // 0 = new pending ticket
  },
  { timestamps: true }
);

ticketSchema.methods.getStatus = () => {
  switch (this.status) {
    case 0:
      return "Pending Admin";
      break;
    case 1:
      return "Pending Customer";
      break;
    case 2:
      return "Resolved";
      break;
    case 3:
      return "Closed";
      break;

    default:
      return "Pending";
      break;
  }
};

const ticketModel = mongoose.model("Ticket", ticketSchema);
module.exports = ticketModel;
