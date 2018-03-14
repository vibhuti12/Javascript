/**
 * Created by vibhutitripathi on 3/9/18.
 */

var yearsArray = [1965,2008,1992];

// var ageArray = [];
//
// for (var i = 0; i < yearsArray.length; i ++){
//     var age = 2018 - yearsArray[i];
//     ageArray[i] = age;
// }

// console.log(ageArray);

// for (var i=0; i < ageArray.length; i ++){
//     if (ageArray[i] < 18){
//         console.log("not full age", ageArray[i])
//     }
//     else{
//         console.log("full age")
//     }
// }


function fullAgeorNot(inputarray) {
    var emptyArray  = []
    for (var i =0; i < inputarray.length; i ++){
        var age = 2018 - inputarray[i];
        if (age < 18){
            emptyArray.push("False");
        }
        else{
            emptyArray.push("True");
        }

    }
console.log(emptyArray)
}

fullAgeorNot(yearsArray);