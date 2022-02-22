function palindrome(str) {
  let regex = /[\W_]/g
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
  str = str.replace(regex, "");
  console.log(str);
  let str2 =str.split("").reverse().join("");
  console.log(str2);
  if(str===str2){
    return true;
  }else{
    return false;
  }
  
}

palindrome("eye");
