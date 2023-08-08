const isIsogram = (str) => {
  str = str.toLowerCase();
  
  for (let character of str){
    
    if(str.indexOf(character) !== str.lastIndexOf(character)){
      return false;
    }
    
  }

  return true;
}
