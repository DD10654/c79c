name_array = [];

function submit()
{
    var name1 = document.getElementById("in1").value;
    var name2 = document.getElementById("in2").value;
    var name3 = document.getElementById("in3").value;
    var name4 = document.getElementById("in4").value;

    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);

    console.log(name_array);

    document.getElementById("display").innerHTML = name_array;

    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}


function sort() {
name_array.sort();
console.log(name_array);
document.getElementById("display").innerHTML = name_array;


}

