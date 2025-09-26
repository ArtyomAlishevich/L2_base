// What century is it?
function whatCentury(year)
{
  let century = Math.trunc(year / 100);
  let decade = year % 100;
  let answer = decade > 0? `${century + 1}`: `${century}`;
  if (+answer % 100 > 10 && +answer % 100 < 14) return answer+="th";
  switch (+answer % 10)
    {
        case 1: answer += "st"; break;
        case 2: answer += "nd"; break;
        case 3: answer += "rd"; break;
        default: answer += "th"; break;
    }
  return answer;
}