var romanToInt = function(s) {
    let romanMap = {
        "I": 1, 
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100,
        "D": 500,
        "M": 1000
    }
    console.log(romanMap)
    let total = 0
//     III  LVIII   MCMXCIV
    for (i = 0; i < s.length; i++) {  
     if (romanMap[s[i]] < romanMap[s[i+1]]) {
        total = total + (romanMap[s+1] - romanMap[s])
     } else  {
         total = total + romanMap[s[i]]
     }
    }
    return total
};

let stuff = romanToInt("MCMXCIV")

let blah = document.querySelector("h1")
blah.innerText = stuff