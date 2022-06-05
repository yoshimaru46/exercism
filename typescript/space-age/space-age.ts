export function age(planet: string, seconds: number): number {
  if (planet === "earth") {
    let num = seconds;
    num = num * 100;
    num = num / 31557600;
    num = Math.round(num);
    num = num / 100;
    return num;
  }

  return 0;
}
