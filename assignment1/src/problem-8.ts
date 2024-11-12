function validateKeys<T extends object>(obj: T, keys: string[]): boolean {
 return keys.every((key) => key in obj);
}

// Sample Input
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"])); // Output: true
console.log(validateKeys(person1, ["name", "address"])); // Output: false
