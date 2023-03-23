import Route from '@ioc:Adonis/Core/Route'

Route.post("/supplier/addSupplier", "supplierController.addSupplier"),
Route.post("/supplier/updateSupplier", "supplierController.updateSupplier")
Route.get("/supplier/getSupplier", "supplierController.getSupplier")
Route.get("/supplier/getSupplierList", "supplierController.getSupplierList")
Route.delete("/supplier/deleteSupplier", "supplierController.deleteSupplier")
Route.get("/supplier/supplierEditHistory", "supplierController.supplierEditHistory")