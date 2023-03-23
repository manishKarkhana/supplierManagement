import Suppliers from "App/Models/Suppliers";


export default class suppliersService {
  static async addSupplier(versionId, owner, name, emailId, gstNo, addedBY) {
    let addSupplier = await Suppliers.create({
      versionId: versionId,
      owner: owner,
      name: name,
      emailId: emailId,
      gstNo: gstNo,
      addedBY: addedBY,
    });
    return addSupplier;
  }
  static async updateSupplier(_id, versionId, owner, name, gstNo, emailId, modifiedBy) {
    var time = {
      time: new Date(),
      name: modifiedBy
    }

    const updateSupplier = await Suppliers.findOne({ _id: _id });
    if (updateSupplier) {
      updateSupplier.updatedAt.push(time),
        (updateSupplier.name = name),
        (updateSupplier.versionId = versionId),
        (updateSupplier.owner = owner),
        (updateSupplier.name = name),
        (updateSupplier.gstNo = gstNo),
        (updateSupplier.emailId = emailId),

        await updateSupplier.save();
    }
  }
  static async getSupplier(_id) {
    const getSupplier = await Suppliers.findOne({ _id: _id });
    return getSupplier;
  }
  static async getSupplierList(sort_by_supplierName, sort_by_updatedAt, sort_by_addedBY, limit, offset) {
    let sortByQuery: {} = { _id: -1 | 1 }
    if (sort_by_supplierName) {
      sortByQuery = {}
      sortByQuery['name'] = sort_by_supplierName === 'asc' ? 1 : -1
    }

    if (sort_by_updatedAt) {
      sortByQuery = {}
      sortByQuery['updatedAt.time'] = sort_by_updatedAt === 'asc' ? 1 : -1
    }

    if (sort_by_addedBY) {
      sortByQuery = {}
      sortByQuery['addedBY'] = sort_by_addedBY === 'asc' ? 1 : -1
    }

    const getSupplierList = await Suppliers.find(
      { isActive: true },
      { _id: 1, versionId: 1, owner: 1, name: 1, gstNo: 1, modifiedBy: 1, addedBY: 1, 'updatedAt.time': 1 }
    ).collation({ locale: 'en' })
      .sort(sortByQuery)
      .skip(offset)
      .limit(limit)
    return getSupplierList;
  }
  static async deleteSupplier(_id) {
    const deleteSupplier = await Suppliers.findOne({ _id: _id });
    if (deleteSupplier) {
      deleteSupplier.isActive = false;
      await deleteSupplier.save();

    }

    return deleteSupplier;
  }
  static async supplierEditHistory(_id) {
    const supplierEditHistory = await Suppliers.findOne({ _id: _id }, { "updatedAt": 1 });
    return supplierEditHistory;
  }
}
