// WeIrD StRiNg CaSe
function toWeirdCase(string){
  string = string.split(' ');
  let answer = '';
  for(let word of string)
    {
      for (let i = 0; i < word.length; i++)
        {
          if(i % 2 == 0)
            {
              answer += word[i].toUpperCase();
            }
          else
            {
              answer += word[i].toLowerCase();
            }
        }
      answer += ' ';
    }
  return answer.trim();
}