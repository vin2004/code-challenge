export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	
};

export const problems: Problem[] = [
	{
		id: "hello-world",
		title: "Print Hello World",
		difficulty: "Easy",
		category: "",
		order: 1,
	
	},
	{
		id: "two-sum",
		title: "Two sum",
		difficulty: "Easy",
		category: "Array",
		order: 2,
		
	},
	{
		id: "Palindrome-number",
		title: "Palindrome Number",
		difficulty: "Easy",
		category: "String",
		order: 3,
		
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		
	},
	
	{
		id: "Permutation",
		title: "Permutation",
		difficulty: "Medium",
		category: "Function",
		order: 5,
		
	},
	{
		id: "4Sum",
		title: "4Sum",
		difficulty: "Medium",
		category: "quadruplets",
		order: 6,
		
	},
	{
		id: "Valid-Sudoku",
		title: "Valid Sudoku",
		difficulty: "Medium",
		category: "Tree",
		order: 7,
		
	},
	{
		id: "Sudoku-Solver",
		title: "Sudoku Solver",
		difficulty: "Hard",
		category: "Array",
		order: 8,
		
	},
	{
		id: "Reverse-Nodes-in-k-Group",
		title: "Reverse Nodes in k-Group",
		difficulty: "Hard",
		category: "Backtracking",
		order: 9,
		
	},
	{
		id: "N-Queens",
		title: "N-Queens",
		difficulty: "Hard",
		category: "Dynamic Programming",
		order: 10,
		
	},
];