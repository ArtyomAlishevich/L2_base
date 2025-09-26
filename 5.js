// Primes in numbers
function primeFactors(n){
    let result = '';
    let i;
    for(i = 1; n % 2 == 0; i++)
      {
        n /= 2;
        result = `(2${i > 1? `**${i}`: ''})`;
      }
    let j = 0;
    i = 3;
    while (n > 1)
      {
        if (n % i == 0)
          {
            n /= i;
            j++;
            continue;
          }
        if (j > 0)
          {
            result += `(${i}${j > 1? `**${j}`: ''})`;
          }
        j = 0;
        i += 2;
      }
    if (j > 0)
      {
          result += `(${i}${j > 1? `**${j}`: ''})`;
      }
  return result;
}