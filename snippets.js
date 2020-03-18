export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
  const result: Set<string> = new Set();

  a2.forEach(str => {
    a1.forEach(substr => {
      if (str.search(substr) > 0) {
        result.add(substr);
      }
    })
  })

  return Array.from(result).sort();
  }
}

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