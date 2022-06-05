const dnaMap: { [key: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna: string): string {
  let rna = [];
  for (const char of dna.split("")) {
    const res = dnaMap[char];
    if (!res) {
      throw new Error("Invalid input DNA.");
    }
    rna.push(res);
  }
  return rna.join("");
}
