import Mongoose from "mongoose";
const { Schema } = Mongoose;

const supplierSchema = new Schema({
  versionId: { type: String, require: true, maxlength: 250, index: true },
  owner: { type: String, require: true, maxlength: 250, index: true },
  name: { type: String, require: true, maxlength: 250, index: true },
  emailId: { type: String, require: true, maxlength: 250, index: true },
  gstNo: { type: String, require: true, maxlength: 250, index: true },
  addedBY: { type: String, require: true, maxlength: 250, index: true },
  isActive: { type: Boolean, default: true, require: true },
  createdAt: { type: Date, immutable: true, default: () => new Date() },
  modifiedBy: { type: Date, immutable: true, default: () => new Date() },
  updatedAt:[{time:Date,name:String}],
});
export default Mongoose.model("suppliers", supplierSchema);
