import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.ObjectId,
      ref: "Product",
    },
  ],
});
export default mongoose.model("Order", orderSchema);
