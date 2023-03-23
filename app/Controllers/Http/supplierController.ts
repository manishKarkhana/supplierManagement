import suppliersService from "App/Services/suppliersService";
export default class supplierController {
  public async addSupplier({ request, response }) {
    let {versionId,owner,name,emailId,gstNo,addedBY} = request.all();
    let addSupplier = await suppliersService.addSupplier(versionId,owner,name,emailId,gstNo,addedBY);
    response.send({
      success: true,
      message: "supplier created",
      addSupplier: addSupplier,
    });
  }

  public async updateSupplier({ request, response }) {
    let {_id,versionId,owner,name,gstNo,emailId,modifiedBy} = request.all();
    let updateSupplier = await suppliersService.updateSupplier(_id,versionId,owner,name,gstNo,emailId,modifiedBy);
    response.send({
      success: true,
      message: "supplier updated",
      updateSupplier: updateSupplier,
    });
  }
  public async getSupplier({ request, response }) {
    let { _id } = request.all();
    let getSupplier = await suppliersService.getSupplier(_id);
    response.send({
      success: true,
      getSupplier: getSupplier,
    });
  }
  public async getSupplierList({ request, response }) {
    let {sort_by_supplierName,sort_by_updatedAt,sort_by_addedBY,limit, offset} = request.all();
    let getSupplierList = await suppliersService.getSupplierList(sort_by_supplierName,sort_by_updatedAt,sort_by_addedBY,limit, offset);
    response.send({
      success: true,
      getSupplierList: getSupplierList,
    });
  }
  public async deleteSupplier({ request, response }) {
    let { _id } = request.all();
    await suppliersService.deleteSupplier(_id);
    response.send({
      success: true,
      message: "supplier deleted",

    });
  }
  public async supplierEditHistory({ request, response }) {
    let { _id } = request.all();
    let supplierEditHistory = await suppliersService.supplierEditHistory(_id);
    response.send({
      success: true,
      supplierEditHistory: supplierEditHistory,
    });
   }

}
