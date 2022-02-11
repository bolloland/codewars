// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    let regex = /[aeiou]/g

    // regex says ONLY letters aeiou  --  the /g denotes global - it will find ALL not just the first
    let found = str.match(regex)
    console.log(found.length)
    vowelsCount = found.length
    return vowelsCount;
  }
  