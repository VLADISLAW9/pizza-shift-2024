export const convertPhoneToValidFormat = (phone: string) => {
  return phone.replace('+', '').replace(/ /g, '');
};
