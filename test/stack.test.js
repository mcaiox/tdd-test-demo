class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }
  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
  pop() {
    this.items.length = this.items.length - 1;
  }
}

describe("My stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it("can push to the top", () => {
    stack.push(1);
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe(1);
  });

  it("can pop off", () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.top).toBe(stack.items[stack.top - 1]);
  });
});
