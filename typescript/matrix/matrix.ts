export class Matrix {
  private _matrix: number[][];
  constructor(matrixStr: string) {
    this._matrix = matrixStr
      .split("\n")
      .map((row) => row.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this._matrix.map((row) => row);
  }

  get columns(): number[][] {
    let cols = [];
    for (let i = 0; i < this._matrix[0].length; i++) {
      const column = this._matrix.map((row) => row[i]);
      cols.push(column);
    }
    return cols;
  }
}
