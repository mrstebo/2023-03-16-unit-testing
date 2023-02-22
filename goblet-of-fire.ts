class GobletOfFire {
  private readonly names: string[] = [];

  public addName(name: string): void {
    this.names.push(name);
  }

  public removeName(): string {
    // return a random name and pop it off the array
    return this.names.splice(Math.floor(Math.random() * this.names.length), 1)[0];
  }
}
