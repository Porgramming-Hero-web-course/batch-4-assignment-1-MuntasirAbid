function removeDuplicates(numbers: number[]): number[] {
 const uniqueNumbers: number[] = [];
 const seen = new Set<number>();

 for (const num of numbers) {
  if (!seen.has(num)) {
   uniqueNumbers.push(num);
   seen.add(num);
  }
 }

 return uniqueNumbers;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // 
