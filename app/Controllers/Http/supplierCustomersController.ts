import supplierCustomersServices from "App/Services/supplierCustomersServices";
export default class supplierCustomersController {
  public async connectCustomerSupplier({ request, response }) {
    let {customerId,supplierId,addedBY} = request.all();
    let connectCustomerSupplier = await supplierCustomersServices.connectCustomerSupplier(customerId,supplierId,addedBY);
    response.send({
      success: true,
      message: "customer supplier connected",
      connectCustomerSupplier: connectCustomerSupplier,
    });
  }
  public async listCustomerSupplier({ request, response }) {
    let { } = request.all();
    let listCustomerSupplier = await supplierCustomersServices.listCustomerSupplier();
    response.send({
      success: true,
      listCustomerSupplier: listCustomerSupplier,
    });
  }
  public async getCustomerSupplier({ request, response }) {
    let {_id} = request.all();
    let getCustomerSupplier = await supplierCustomersServices.getCustomerSupplier(_id);
    response.send({
      success: true,
      getCustomerSupplier: getCustomerSupplier,
    });
  }
  public async updateCustomerSupplier({ request, response }) {
    let {_id,customerId,supplierId} = request.all();
    let updateCustomerSupplier = await supplierCustomersServices.updateCustomerSupplier(_id,customerId,supplierId);
    response.send({
      success: true,
      message: "customer supplier connection updated",
      updateCustomerSupplier: updateCustomerSupplier,
    });
  }
  public async deleteCustomerSupplier({ request, response }) {
    let { _id} = request.all();
    await supplierCustomersServices.deleteCustomerSupplier(_id);
    response.send({
      success: true,
      message: "customer supplier connection deleted",

    });
  }
}
