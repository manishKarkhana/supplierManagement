import Route from '@ioc:Adonis/Core/Route'

Route.post("/supplierCustomers/connectCustomerSupplier", "supplierCustomersController.connectCustomerSupplier"),
Route.get("/supplierCustomers/listCustomerSupplier", "supplierCustomersController.listCustomerSupplier")
Route.get("/supplierCustomers/getCustomerSupplier", "supplierCustomersController.getCustomerSupplier")
Route.post("/supplierCustomers/updateCustomerSupplier", "supplierCustomersController.updateCustomerSupplier")
Route.delete("/supplierCustomers/deleteCustomerSupplier", "supplierCustomersController.deleteCustomerSupplier")

