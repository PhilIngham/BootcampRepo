const customers = [
  {
    id: 1,
    name: "Tim Hope",
    address: {
      street: "1st Customer Street",
    },
  },
];

export function getCustomerById(id) {
  const customer = customers.find((customer) => customer.id === id);

  return addPrivileges(id, customer);
}

function addPrivileges(id, customer) {
  let customerWithPrivilege = { ...customer };
  if (id === 1) {
    customerWithPrivilege.rank = "Gold";
  }
  return customerWithPrivilege;
}
