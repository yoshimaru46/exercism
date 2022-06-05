export function isPangram(text: string) {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  return allLetters
    .split("")
    .every(
      (letter) =>
        text.includes(letter.toLowerCase()) ||
        text.includes(letter.toUpperCase())
    );
}
