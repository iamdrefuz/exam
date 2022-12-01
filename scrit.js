/**
 * 1 ozgaruvchilarni const let turi mavjud (var hozirda ishkatilmaydi) let valuesini hohlagan joyda ozgartritib ishlatishimiz mumkin lekin constni ozgartirib bolmaydi
 * 2 String Number Boolean Undefiled Null ....
 * 3 Increment oshuvchi decrement kamayuvchi
 * 4  "string"
 * 5 && ikki qiymat true bolganda true boladi || bir qiymat true bolsa ham true qabul qiladi
 * 6 if else  berilga shartni true false ligini teshkiradi
 * 7 else {if()}
 * 8 massiv ozida elementlarni index boyicha tartiblaydi . (arr[length-1])
 * 9 object key va value bilan malumot saqlaydi
 * 10 method bu dasturlash tilini ozida mavjud bolgan funksiya va bu bilan malumotlar ustida ishlash mumkingitgit
 */

function func1(a , b){
    console.log(a+b);
}
func1(3,5)

function func2(yosh){
   let yil = 2022
   console.log(yil -yosh);
}
func2(20)

function func3(a , b){
  if(typeof a =="number" && typeof b === "number"){
    console.log(a+b);
  }
  else{
    console.log("son emas");
  }
}
func3(2,4)