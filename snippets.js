export function solution(roman: string): number {
  const table = {
    M : 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }
  
  return roman.split('').reduceRight((prev, cur, i, arr) => {
    return table[arr[i+1]] > table[cur] ? prev - table[cur] : prev + table[cur];
  }, 0);
}

const dictionary: { [ch: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
  
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