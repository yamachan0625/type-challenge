interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// unionの分配を[]で防ぐ
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];

// type InorderTraversal<T extends TreeNode | null> = T extends null
//   ? []
//   : [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>];

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

type A = InorderTraversal<typeof tree1>; // [1, 3, 2]
