
import * as numbers from '../numbers'

// solve project euler 1
function multiplesOf3Or5(): void {
  let sum : number = 0;
  for (let i : number = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0)  {
      sum += i;
    }
  }
  console.log(sum);
}

multiplesOf3Or5();
