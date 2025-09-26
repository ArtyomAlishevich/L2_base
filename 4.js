// Find the missing term in an Arithmetic Progression
function findMissing(list) { 
  let dif = list[1] -  list[0];
  if (dif > list[2] - list[1])
    {
      dif = list[2] - list[1];
    }
  for(let i = 0; i < list.length - 1; i++)
    {
      if(list[i] + dif != list[i+1])
        {
          return list[i] + dif;
        }
    }
}