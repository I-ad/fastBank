export const dateFormat = (value: string) => {
  const cleanValue: string = value
    .replace('/', '')
    .replace(' ', '')
    .replace('  ', '')
    .replace('/', '');
  const L = cleanValue.length;
  if (L > 2 && L <= 4) {
    const [a, b, ...c]: any = cleanValue;
    return `${a}${b}/${c.join('')}`;
  } else if (L > 4) {
    const [a, b, c, d, ...e]: any = cleanValue;
    return `${a}${b}/${c}${d}/${e.join('')}`;
  }
  return value;
};
