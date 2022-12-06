const percDiscount = 0.1;
const taxRate = 0.1;

export const calcDiscount = ({ price, numDays }) => {
  console.log({ price, numDays });
  return price * numDays * percDiscount;
};
export const calcTaxes = ({ price, numDays }) => {
  let total = price * numDays;
  let discount = price * percDiscount * numDays;
  return (total - discount) * taxRate;
};

export const calcTotal = ({ price, numDays }) => {
  let total = price * numDays;
  let discount = price * percDiscount * numDays;
  let taxes = (total - discount) * taxRate;

  return total - discount + taxes;
};
