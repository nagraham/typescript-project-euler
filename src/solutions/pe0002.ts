
import * as Numbers from '../numbers'
import * as Sequences from '../sequences'

function sumOfEvenFibonacciNumbers(): number {
  return Numbers.sum(Numbers.evens(Sequences.fibonacci(1, 4000000)));
}

console.log(sumOfEvenFibonacciNumbers());
