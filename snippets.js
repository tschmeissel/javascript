export class Challenge {
  /*
   check if every opening brace has a closing brace in proper order
   examples
    "([{}])"
    "[({})](]"
    "[(])"
    "()"
  */
  static validateBraces(braces) {
    if (!!(braces.length % 2)) {
      return false;
    }
  
    const regex = /(\(\))|(\[\])|(\{\})/;
    let found = true;
    while (found) {
      if (regex.test(braces)) {
        braces = braces.replace(regex, "")
      } else {
        found = false;
      }
    }
  
    return braces.length === 0;  
  }
}