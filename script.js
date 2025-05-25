function firstWord(str) {
  // your code here
	str = str.trim();

	

    const spaceIndex = str.indexOf(' ');

    if (spaceIndex === -1) {
        return str;
    }

    // Return substring from start to first space
    return str.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));