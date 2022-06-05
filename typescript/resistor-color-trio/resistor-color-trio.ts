const colorMapping: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedResistorValue(colors: string[]): string {
  const colorValues = colors.map((color) => colorMapping[color]);
  const decimalValue =
    colorValues.slice(0, 2).reduce((acc, curr) => acc * 10 + curr) *
    10 ** colorValues[2];
  if (decimalValue < 1000) {
    return `${decimalValue} ohms`;
  } else {
    const kiloValue = decimalValue / 1000;
    return `${kiloValue} kiloohms`;
  }
}
