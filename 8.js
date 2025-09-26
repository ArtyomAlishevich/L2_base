function expandedForm(num) {
  let answer = '';
  for (let i = 0; num > 0; i++)
    {
      answer += `${num % 10 != 0? `${'0'.repeat(i)}${num % 10} + `: ''}`
      num = Math.trunc(num / 10);
    }
  answer = answer.slice(0, answer.length - 3);
  return answer.split("").reverse().join("");
}