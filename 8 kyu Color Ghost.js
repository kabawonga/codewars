class Ghost {
  constructor() {
    this.colors = ["white", "yellow", "purple", "red"];
  }
  get color() {
    const pos = Math.trunc(Math.random() * this.colors.length);
    return this.colors[pos];
  }
}
