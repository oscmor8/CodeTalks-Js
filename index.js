

// ===================== Complete the solution so that the function will break up camel casing, using a space between words. ========================

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2" ); // "$1 $2" placeholder in string that is used by the replace() method. 
  }

  // It uses A-Z to find out the lowercase and uppercase letters 
  // g means the replace method should be performed globally 
  // camelCaing matches a lowercase letter followed by an uppercase letter in a string

  // $1 = [a-z], $2 = [A-Z]


  console.log(solution("camelCasing"))
  console.log(solution("pizza"));
  console.log(solution("pineappleBelongsOnPizza"));
 
  

// complete the function
function solution2(string) {
    let res = "";                   // empty variable
    let letters = string.split("");   // splits each letter in to array
    letters.forEach(letter=>{    // loop that loops over each letter
      if(letter.toUpperCase() == letter)  // checks array if its uppercase letter, if there is adss a space  and continues
        res+=" "+letter
      else
        res+=letter    // no space? move the letter into empty variable 
    })
    return res;
}


console.log(solution2("camelCasing"))
console.log(solution2("identifier"));
console.log(solution2(""));