interface InterfaceOfUser {
  name: string;
  age: number;
  sayHello: () => string;
}

class User implements InterfaceOfUser {
  name: string;
  age: number;

  constructor() {
    this.name = "";
    this.age = 0;
  }
  sayHello(): string {
    return `Hello, I am ${this.name}, ${this.age} years old.`;
  }
}

const user1 = new User();
user1.name = "Takuya";
user1.age = 36;
console.log(user1.sayHello());
