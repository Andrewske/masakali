const percDiscount = 0.1;
const taxRate = 0.1;

export const calcDiscount = ({ villaPrice, numDays }) => {
  return villaPrice * numDays * percDiscount;
};
export const calcTaxes = ({ villaPrice, numDays = 1, hasDiscount = true }) => {
  let total = villaPrice * numDays;
  let discount = hasDiscount ? villaPrice * percDiscount * numDays : 0;

  return (total - discount) * taxRate;
};

export const calcTotal = ({ villaPrice, numDays }) => {
  let total = villaPrice * numDays;
  let discount = villaPrice * percDiscount * numDays;
  let taxes = (total - discount) * taxRate;

  return total - discount + taxes;
};
