export function isPangram(sentence: string) {
  sentence = sentence.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every((c) => sentence.includes(c));
}
