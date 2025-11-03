function reverseStr(s: string, k: number): string {
  return s
    .match(new RegExp(`.{1,${2 * k}}`, "g"))! //it divides by 2 * k blocks
    .map(
      (block) => block.slice(0, k).split("").reverse().join("") + block.slice(k)
    )
    .join("");
}
