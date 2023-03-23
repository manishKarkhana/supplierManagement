import supplierCustomers from "App/Models/supplierCustomers";



export default class supplierCustomersServices {
  static async connectCustomerSupplier(customerId,supplierId,addedBY) {
    let connectCustomerSupplier = await supplierCustomers.create({
      customerId: customerId,
      supplierId:supplierId,
      addedBY:addedBY
    });
    return connectCustomerSupplier;
  }
  static async listCustomerSupplier() {
    const listCustomerSupplier = await supplierCustomers.find(
      { isActive: true },
    );
    return listCustomerSupplier;
  }
  static async getCustomerSupplier(_id) {
    const getCustomerSupplier = await supplierCustomers.find(
      { _id: _id },
    );
    return getCustomerSupplier;
  }
  static async updateCustomerSupplier(_id,customerId,supplierId) {
    const updateCustomerSupplier = await supplierCustomers.findOne({ _id: _id });
    if (updateCustomerSupplier) {
      updateCustomerSupplier.customerId=customerId
      updateCustomerSupplier.supplierId=supplierId
      await updateCustomerSupplier.save();
    }
    return updateCustomerSupplier
  }
  static async deleteCustomerSupplier(_id) {
    const deleteCustomerSupplier = await supplierCustomers.findOne({ _id: _id });
    if (deleteCustomerSupplier) {
      deleteCustomerSupplier.isActive=false
        await deleteCustomerSupplier.save();
    }
  }
  
}
