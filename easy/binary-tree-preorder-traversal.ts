// I resolve this problem in 3 different ways:

type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

// 1 - Auxiliary function
function preorderTraversalAuxiliary(root: TreeNode | null): number[] {
  const treeArray: number[] = [];
  traverseAuxiliary(root, treeArray);
  return treeArray;
}

function traverseAuxiliary(root: TreeNode | null, treeArray: number[]): void {
  if (!root) return;

  treeArray.push(root.val);
  traverseAuxiliary(root.left, treeArray);
  traverseAuxiliary(root.right, treeArray);
}

// 2 - Compact version
function preorderTraversalCompact(root: TreeNode | null): number[] {
  if (!root) return [];
  return [
    root.val,
    ...preorderTraversalCompact(root.left),
    ...preorderTraversalCompact(root.right),
  ];
}

// 3 - Recursive version
function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null): void {
    if (!node) return;

    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return result;
}
