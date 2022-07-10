export class BinarySearchTree {
  private _left: BinarySearchTree | null = null;
  private _right: BinarySearchTree | null = null;
  private _data: number;

  constructor(data: number) {
    this._data = data;
  }

  public get data(): number {
    return this._data;
  }

  get right(): BinarySearchTree | null {
    return this._right;
  }

  get left(): BinarySearchTree | null {
    return this._left;
  }

  public insert(item: number): void {
    if (item <= this.data) {
      if (this.left) {
        this.left.insert(item);
      } else {
        this._left = new BinarySearchTree(item);
      }
    } else {
      if (this.right) {
        this.right.insert(item);
      } else {
        this._right = new BinarySearchTree(item);
      }
    }
  }

  public each(callback: (element: number) => void): void {
    if (this.left) {
      this.left.each(callback);
    }
    callback(this.data);
    if (this.right) {
      this.right.each(callback);
    }
  }
}
