const isClosingBracket = (bracket: string): boolean => {
  const closingBrackets: Record<string, boolean> = {
    "]": true,
    "}": true,
    ")": true,
  };

  return closingBrackets[bracket];
};

const matchingBracket: Record<string, string> = {
  "[": "]",
  "{": "}",
  "(": ")",
};

export function isValid(s: string): boolean {
  const stack: any[] = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (isClosingBracket(currentBracket)) {
      if (stack.length === 0) {
        return false;
      }

      const correspondingBracket = stack.pop();

      if (currentBracket !== matchingBracket[correspondingBracket]) {
        console.log({ currentBracket, correspondingBracket });
        return false;
      }
    } else {
      stack.push(currentBracket);
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

console.log(isValid("{[()]}"));
