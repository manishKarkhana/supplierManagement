import customersService from "App/Services/customersService";
export default class customerController {
  public async addCustomer({ request, response }) {
    let {versionId,owner,name,emailId,gstNo,addedBY} = request.all();
    let addCustomer = await customersService.addCustomer(versionId,owner,name,emailId,gstNo,addedBY);
    response.send({
      success: true,
      message: "customer created",
      addCustomer: addCustomer,
    });
  }
  public async updateCustomer({ request, response }) {
    let {_id,versionId,owner,name,gstNo,emailId,modifiedBy} = request.all();
    let updateCustomer = await customersService.updateCustomer(_id,versionId,owner,name,gstNo,emailId,modifiedBy);
    response.send({
      success: true,
      message: "supplier updated",
      updateCustomer: updateCustomer,
    });
  }
  public async getCustomer({ request, response }) {
    let { _id } = request.all();
    let getCustomer = await customersService.getCustomer(_id);
    response.send({
      success: true,
      getCustomer: getCustomer,
    });
  }
  public async getCustomerList({ request, response }) {
    let {sort_by_supplierName,sort_by_updatedAt,sort_by_addedBY,limit, offset} = request.all();
    let getCustomerList = await customersService.getCustomerList(sort_by_supplierName,sort_by_updatedAt,sort_by_addedBY,limit, offset);
    response.send({
      success: true,
      getCustomerList: getCustomerList,
    });
  }
  public async deleteCustomer({ request, response }) {
    let { _id } = request.all();
    await customersService.deleteCustomer(_id);
    response.send({
      success: true,
      message: "customer deleted",

    });
  }
  public async customerEditHistory({ request, response }) {
    let { _id } = request.all();
    let customerEditHistory = await customersService.customerEditHistory(_id);
    response.send({
      success: true,
      customerEditHistory: customerEditHistory,
    });
   }

}
