let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna)
//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.


console.log(dna.trim());

//b) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log(dna.toUpperCase());


//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = dna.trim().toUpperCase();

console.log(dna);