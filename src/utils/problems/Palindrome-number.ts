import assert from "assert";
import { Problem } from "./types/problem";


export 
	const PalindromeHandler = (fn: any) => {
		try {
			const tests = ["x=121", "x=-121", "x=10"];
			const answers = [true, false, false];
			for (let i = 0; i < tests.length; i++) {
				const result = fn(tests[i]);
				assert.deepEqual(tests[i], answers[i]);
			}
			return true;
		} catch (error: any) {
			console.error("Error from validParenthesesHandler: ", error);
			throw new Error(error);
		}
	};

const starterCodePalindromeJS =`// Write your code here`;

export const Palindrome: Problem = {
	id: "Palindrome",
	title: "3.Palindrome",
	problemStatement: `
  <p class='mt-3'> Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>`,
  examples: [
	{
		id: 1,
		inputText: " x = 121",
		outputText: " true",
		explanation: "121 reads as 121 from left to right and from right to left",
	},
	{
		id: 2,
		inputText: " x= -121 ",
		outputText: " false",
		explanation: " From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome",
	},
	{
		id: 3,
		inputText: " x = 10",
		outputText: " false",
		explanation: " Reads 01 from right to left. Therefore it is not a palindrome."
	},
],
	constraints: `
  <li class='mt-2'><code>-2^31 <= x <= 2^31 - 1</code></li>`,

	starterCode: starterCodePalindromeJS,
	handlerFunction: PalindromeHandler,
	starterFunctionName: "function Palindrome",
	order: 3,
};



