function domainName(url){
  if (url.slice(0, 7) == "http://") url = url.slice(7, -1);
  else if (url.slice(0, 8) == "https://") url = url.slice(8, -1);
  if (url.slice(0, 4) == "www.") url = url.slice(4, -1);
  return url.slice(0, url.indexOf('.'));
}