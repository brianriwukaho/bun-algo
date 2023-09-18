export const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false;
    }

    const occurenceMap: Record<string, number> = {};

    // string 1
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        const occurence = occurenceMap[currentChar];
        if (!!occurence) {
            occurenceMap[currentChar] = occurence + 1;
        } else {
            occurenceMap[currentChar] = 1;
        }
    }

    // string 2
    for (let i = 0; i < t.length; i++) {
        const currentChar = t[i];

        const occurence = occurenceMap[currentChar];
        if (!occurence || occurence < 1) {
            return false;
        } else {
            occurenceMap[currentChar] = occurence - 1;
        }
    }

    return true;
};
