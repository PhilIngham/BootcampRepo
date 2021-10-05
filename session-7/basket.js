import getCourierByKey from "./courier-utils.js";
import { getCustomerById } from "./customer-utils.js";

const transactionDetails = {
  courier: "DHL",
  product: {
    name: "Jeans",
    price: 12.0,
  },
  customerId: 1,
};

const customer = getCustomerById(transactionDetails.customerId);
console.log("Customer: ", customer);

const courierAddress = getCourierByKey(transactionDetails.courier);
console.log("Courier address: ", courierAddress);
