function bingo(ticket, win){
  let miniwins = 0;
  for (let element of ticket)
    {
      for (let char of element[0])
        {
          if (char.charCodeAt() == element[1]) 
            {
              miniwins++;
              break;
            }
        }
    }
	
  return miniwins >= win? "Winner!": "Loser!";
}