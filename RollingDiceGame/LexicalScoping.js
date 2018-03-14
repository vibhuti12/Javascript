/**
 * Created by vibhutitripathi on 3/9/18.
 */

var a = "hello";

first();

function first() {
    var b = "there"
    second();


    function second() {
        var c = "vibhuti"
        third();


        function third() {
            console.log(a + b + c);

        }
    }
}