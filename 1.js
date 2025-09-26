// Two cube sums
function hasTwoCubeSums(n) {
  if (n < 1729) return false;
	let solutions = 0;
  for (let i = 1; i < n ** (1/3); i++)
    {
      for (let j = i + 1; j < n ** (1/3); j++)
        {
          if (i**3 + j**3 == n) solutions++;
        }
    }
  return solutions > 1;
}