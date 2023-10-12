class TreeNode {
    val: number;
    chidlren: TreeNode[];

    constructor(val: number) {
        this.val = val;
        this.chidlren = [];
    }
}

const maxDistance = (g: number, gFrom: number[], gTo: number[]): number => {
    const nodeMap = new Map<number, TreeNode>();

    for (let i = 0; i < g; i++) {
        let fromNode: TreeNode | null = null;
        let toNode: TreeNode | null = null;

        const fromValue = gFrom[i];
        const toValue = gTo[i];

        if (nodeMap.has(fromValue)) {
            fromNode = nodeMap.get(fromValue)!;
        } else {
            fromNode = new TreeNode(fromValue);
            nodeMap.set(fromValue, fromNode);
        }

        if (nodeMap.has(toValue)) {
            toNode = nodeMap.get(toValue)!;
        } else {
            toNode = new TreeNode(toValue);
            nodeMap.set(toValue, toNode);
        }

        fromNode.chidlren.push(toNode);
    }

    const dfs = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }

        let max = 0;
        for (const child of node.chidlren) {
            max = Math.max(max, dfs(child));
        }

        return max + 1;
    };

    const firstNode = gFrom[0];
    const maxDepth = dfs(nodeMap.get(firstNode) ?? null);

    console.log(nodeMap);

    return maxDepth;
};

console.log(maxDistance(5, [1, 5, 5, 1], [5, 3, 4, 2]));
