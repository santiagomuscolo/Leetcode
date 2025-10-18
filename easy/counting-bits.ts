function countBits(n: number): number[] {
  //make an array with the law of length n + 1 and fill it with 0's
  const arr = new Array(n + 1).fill(0);

  //loop the length of n and apply the bits[i] = bits[i >> 1] + (i & 1) property
  for(let i = 0; i <= n; i++){
      arr[i] = arr[i >> 1] + (i & 1);
  };

  return arr;
};