import Customers from "App/Models/Customers";


export default class customersService {
  static async addCustomer(versionId,owner,name,emailId,gstNo,addedBY) {
    let addCustomer = await Customers.create({
      versionId: versionId,
      owner: owner,
      name: name,
      emailId: emailId,
      gstNo: gstNo,
      addedBY: addedBY,
    });
    return addCustomer;
  }
  static async updateCustomer(_id,versionId,owner,name,gstNo,emailId,modifiedBy) {
    var time={
      time:new Date(),
      name:modifiedBy
    }
  
    const updateCustomer = await Customers.findOne({ _id: _id });
    if (updateCustomer) {
      updateCustomer.updatedAt.push(time),
      (updateCustomer.name = name),
        (updateCustomer.versionId = versionId),
        (updateCustomer.owner = owner),
        (updateCustomer.name = name),
        (updateCustomer.gstNo = gstNo), 
        (updateCustomer.emailId = emailId), 

        await updateCustomer.save();
    }
  }
  static async getCustomer(_id) {
    const getCustomer = await Customers.findOne({ _id: _id });
    return getCustomer;
  }
  static async getCustomerList(sort_by_customerName,sort_by_updatedAt,sort_by_addedBY,limit, offset) {
    let sortByQuery: {} = { _id: -1 | 1 }
    if (sort_by_customerName) {
      sortByQuery = {}
      sortByQuery['name'] = sort_by_customerName === 'asc' ? 1 : -1
    }

    if (sort_by_updatedAt) {
      sortByQuery = {}
      sortByQuery['updatedAt.time'] = sort_by_updatedAt === 'asc' ? 1 : -1
    }
    if (sort_by_addedBY) {
      sortByQuery = {}
      sortByQuery['addedBY'] = sort_by_addedBY === 'asc' ? 1 : -1
    }

    const getCustomerList = await Customers.find(
      { isActive: true },
      { _id:1,versionId:1,owner:1,name:1,gstNo:1,modifiedBy:1,addedBY:1,'updatedAt.time':1}
    )  .collation({ locale: 'en' })
    .sort(sortByQuery)
    .skip(offset)
    .limit(limit)
    return getCustomerList;
  }
  static async deleteCustomer(_id) {
    const deleteCustomer = await Customers.findOne({ _id: _id });
    if (deleteCustomer) {
      deleteCustomer.isActive = false;
      await deleteCustomer.save();

    }

    return deleteCustomer;
  }
  static async customerEditHistory(_id) {
    const customerEditHistory = await Customers.findOne({ _id: _id },{"updatedAt":1});
    return customerEditHistory;
  }
  
}
