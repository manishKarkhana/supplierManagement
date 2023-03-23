import Route from '@ioc:Adonis/Core/Route'

Route.post("/customer/addCustomer", "customerController.addCustomer"),
Route.post("/customer/updateCustomer", "customerController.updateCustomer")
Route.get("/customer/getCustomer", "customerController.getCustomer")
Route.get("/customer/getCustomerList", "customerController.getCustomerList")
Route.delete("/customer/deleteCustomer", "customerController.deleteCustomer")
Route.get("/customer/customerEditHistory", "customerController.customerEditHistory")