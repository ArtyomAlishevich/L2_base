function hexStringToRGB(hexString) {
  hexString = hexString.slice(1, hexString.length);
  let answer = {};
  console.log(typeof(answer))
  for (let i = 0; i < hexString.length; i+=2)
    {
      answer[`${i == 0 ? 'r': i == 2? 'g': 'b'}`] = Number(`0x${hexString.slice(i, i + 2)}`);
    }
  return answer;
}