function getGrade (s1, s2, s3) {
    var score = (s1 + s2 + s3)/3
    if(score < 60){
      return 'F'
    }
    else if(score < 70){
      return 'D'
    }
    else if(score < 80){
      return 'C'
    }
    else if(score < 90){
      return 'B'
    }
    else if(90 <= score < 100){
      return 'A'
    }
}

function divisibleByThree(str){
    let sum = 0
    for (let i = 0; i < str.length; i++){
      let element = str[i];
      sum += Number(element);
    } 
    if(sum % 3 == 0){
       return true
     }
     return false
}

function oddOrEven(array) {
    let sum = 0
    array.forEach(element => {
      sum += element
    });
   if(sum % 2 === 0){
     return 'even'
   }
   else{
     return 'odd'
   }
}

var isAnagram = function(test, original) {
    var a = test.toLowerCase().split('').sort().join('');
    var b = original.toLowerCase().split('').sort().join('');
    if (a == b){
      return true
    }
    else{
     return false 
    }
};