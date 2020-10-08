export const phoneFormat = (value: string) => {
  const cleanValue = phoneUnFormat(value);
  const L = cleanValue.length;
  if (L > 6) {
    const [a, b, c, d, e, f, ...g]: any = cleanValue;
    return `(${a}${b}${c}) ${d}${e}${f}-${g.join('')}`;
  } else if (L > 3) {
    const [a, b, c, ...d]: any = cleanValue;
    return `(${a}${b}${c}) ${d.join('')}`;
  } else if (L > 2) {
    return cleanValue;
  }
  return value;
};
export const phoneUnFormat = (value: string) => {
  return value
    .replace('(', '')
    .replace(')', '')
    .trim()
    .replace(' ', '')
    .replace('  ', '')
    .replace('-', '')
    .replace(' - ', '');
};
