export const groupAnagrams = (strs: string[]): string[][] => {
    const hashOccurence: Record<string, string[]> = {};
    for (let i = 0; i < strs.length; i++) {
        const currentString = strs[i];
        const deterministicKey = currentString.split('').sort().join('');
        if (!!hashOccurence[deterministicKey]) {
            hashOccurence[deterministicKey].push(currentString);
        } else {
            hashOccurence[deterministicKey] = [currentString];
        }
    }

    return Object.values(hashOccurence);
};

console.log(groupAnagrams(['cats', 'rats', 'bats', 'stab']));
