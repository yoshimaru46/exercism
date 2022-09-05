export class LinkedList<TElement> {
  private list: TElement[] = [];
  public push(element: TElement) {
    this.list.push(element);
  }

  public pop(): TElement | undefined {
    return this.list.pop();
  }

  public shift(): TElement | undefined {
    return this.list.shift();
  }

  public unshift(element: TElement): void {
    this.list.unshift(element);
  }

  public delete(element: TElement): void {
    const idx = this.list.indexOf(element);
    if (idx >= 0) {
      this.list.splice(idx, 1);
    }
  }

  public count(): number {
    return this.list.length;
  }
}
