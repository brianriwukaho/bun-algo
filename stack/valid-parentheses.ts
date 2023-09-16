const closingBrackets = new Set(["]", "}", ")"]);

const matchingBracket: Record<string, string> = {
  "[": "]",
  "{": "}",
  "(": ")",
};

export function isValid(s: string): boolean {
  const stack: string[] = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (closingBrackets.has(currentBracket)) {
      if (stack.length === 0) {
        return false;
      }

      const correspondingBracket = stack.pop();

      if (
        !!correspondingBracket &&
        currentBracket !== matchingBracket[correspondingBracket]
      ) {
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
