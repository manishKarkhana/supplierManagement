import Mongoose from 'mongoose';
const { Schema } = Mongoose;

const supplierCustomerSchema = new Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'customers' },
    supplierId: { type: Schema.Types.ObjectId, ref: 'suppliers' },
    addedBY: { type: String, require: true, maxlength: 250, index: true },
    modifiedBy: { type: String, require: true, maxlength: 250, index: true },
    isActive: { type: Boolean, default: true, require: true },
    createdAt: { type: Date, immutable: true, default: () => new Date() },
    updatedAt:[{time:Date,name:String}],
});
export default Mongoose.model('supplierCustomers', supplierCustomerSchema);

