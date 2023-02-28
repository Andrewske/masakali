const percDiscount = 0.1;
const taxRate = 0.1;

export const calcDiscount = ({ villaPrice, numDays }) => {
  return villaPrice * numDays * percDiscount;
};
export const calcTaxes = ({ villaPrice, numDays }) => {
  let total = villaPrice * numDays;
  let discount = villaPrice * percDiscount * numDays;
  return (total - discount) * taxRate;
};

export const calcTotal = ({ villaPrice, numDays }) => {
  let total = villaPrice * numDays;
  let discount = villaPrice * percDiscount * numDays;
  let taxes = (total - discount) * taxRate;

  return total - discount + taxes;
};
