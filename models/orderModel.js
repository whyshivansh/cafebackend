import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderValue: { type: Number },
    status: { type: String, default: "Pending" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        productName: { type: String },
        description: { type: String },
        price: { type: Number },
        imgUrl: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
