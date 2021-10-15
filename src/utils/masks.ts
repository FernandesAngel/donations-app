export const currencyMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d)/, 'R$ $1')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};
