array1 = [];
array2 = [];
array3 = [];
array4 = [];
array5 = [];
array6 = [];

var peperoni = "Peperoni Pizza";
var pineapple = "Pineapple Pizza";
var vegetarian = "Vegetarian Pizza";
var meat ="Mince Meat Pizza";
var cheese = "Cheese Pizza";

array1.push(peperoni);
array2.push(pineapple);
array3.push(meat);
array4.push(vegetarian);
array5.push(cheese);
function displaymenu()
{
document.getElementById("div1").innerHTML = array1;
document.getElementById("div2").innerHTML = array2;
document.getElementById("div3").innerHTML = array3;
document.getElementById("div4").innerHTML = array4;
document.getElementById("div5").innerHTML = array5;
}
function displaymenu2()
{
document.getElementById("dov1").innerHTML = array1;
document.getElementById("dov2").innerHTML = array2;
document.getElementById("dov3").innerHTML = array3;
document.getElementById("dov4").innerHTML = array4;
document.getElementById("dov5").innerHTML = array5;
}
function add()
{
var item = document.getElementById("input1").value;
document.getElementById(item).value = "dov6";
}