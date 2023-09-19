class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export const invertTree = (
    root: TreeNode | null,
    toVisit: TreeNode[] = []
): TreeNode | null => {
    if (root == null) {
        return null;
    }

    const right = root.right;
    const left = root.left;

    if (right !== null) {
        toVisit.push(right);
    }

    if (left !== null) {
        toVisit.push(left);
    }

    root.left = right;
    root.right = left;

    const visit = toVisit.pop() ?? null;

    invertTree(visit, toVisit);

    return root;
};
