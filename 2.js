// IPv4 Parser
function ipv4Parser(ip, mask){
  let arrayIp = ip.split('.');
  let arrayMask = mask.split('.');
  let arrayNetworkBlock = new Array();
  let arrayHostIdentifier = new Array();
  for (let i = 0; i < arrayIp.length; i++)
    {
      arrayNetworkBlock[i] = arrayIp[i] & arrayMask[i];
      arrayHostIdentifier[i] = arrayIp[i] - arrayNetworkBlock[i];
    }
  return [arrayNetworkBlock.join('.'), arrayHostIdentifier.join('.')]
}