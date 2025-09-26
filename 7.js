function wave(str){
  let array = new Array();
  for (let i = 0; i < str.length; i++)
    {
      let element = '';
      for (let j = 0; j < str.length; j++)
        {
          if (j == i) element += str[i].toUpperCase();
          else element += str[j];
        }
      if (element == str) continue
      array.push(element);
    }
  return array;
}