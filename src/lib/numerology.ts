export const reduceWithMasters = (value: number): number => {
  let current = value;
  while (current > 9 && current !== 11 && current !== 22) {
    current = String(current)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return current;
};

export const calculateLifePath = (dateValue: string): number | null => {
  if (!dateValue) return null;
  const [yearStr, monthStr, dayStr] = dateValue.split('-');
  if (!yearStr || !monthStr || !dayStr) return null;

  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (!year || !month || !day) return null;

  const monthGroup = reduceWithMasters(month);
  const dayGroup = reduceWithMasters(day);
  const yearGroup = reduceWithMasters(
    String(year)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0)
  );

  return reduceWithMasters(monthGroup + dayGroup + yearGroup);
};

const letterValue = (char: string): number => {
  const map: Record<string, number> = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  return map[char] || 0;
};

export const calculateExpression = (nameValue: string): number | null => {
  const cleaned = nameValue.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleaned) return null;
  const total = cleaned.split('').reduce((sum, char) => sum + letterValue(char), 0);
  return reduceWithMasters(total);
};
