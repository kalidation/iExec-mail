export const truncateAddress = (address?: string): string => {
  const left = address?.substring(0, 6);
  const right = address?.substring(address.length - 6, address.length);

  return `${left} ...${right}`;
};
