function solution(str){
  let answer = new Array();
  for (let i = 0; i < str.length - 1; i+=2)
    {
      answer.push(`${str.slice(i, i+2)}`);
    }
  if (str.length % 2 != 0) answer.push(`${str.at(-1)}_`);
  return answer;
}