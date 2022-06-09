
async function main(){
    var value = document.getElementById("name_input").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    // var value = document.getElementById("name_input").value;
try{
    let res = await fetch(url);
let out = await res.json();
// console.log(out.meals,"meals")
console.log(out.meals)
append(out.meals)
showData(out.meals)


}
catch(error){
    console.log(error)
}

}
let id;
function debounceMethod(func,delay){
if(id){
    clearTimeout(id)
}
id = setTimeout(()=>{
    func;

},delay)
}

function append(Info){
    var box = document.getElementById("name");
    box.innerText= null;


    Info.forEach((elem)=>{
var div = document.createElement("div");
div.setAttribute("id","box")
div.innerText= elem.strMeal;
div.addEventListener("click",()=>{
    jumpRamdom(elem.strMeal)
})
box.append(div)

    })
}



//showdata
function showData(data){
    var main_box = document.getElementById("grid");
    main_box.innerHTML = null
    data.forEach((elem)=>{
        console.log(elem)



//         var iframe  = document.createElement("img");
//         iframe.setAttribute("id","iframe")
    
//         iframe.src = elem.strMealThumb;
//         var food_name = document.createElement("p");
//         food_name.innerText ="Meal:"+" "+ elem.strMeal;
//         var category = document.createElement("p");
//         category.innerText ="Category:"+" "+ elem.strCategory;
//         main_box.append(iframe,food_name,category)
// main_box.append(main_box);
var box = document.createElement("div")
box.setAttribute("id","collect")
var img = document.createElement("img");
img.setAttribute("id","thumbimg")
img.src = elem.strMealThumb;

var food_name = document.createElement("p");
food_name.innerText = "Meal:"+" "+elem.strMeal


var category = document.createElement("p");
        category.innerText ="Category:"+" "+ elem.strCategory;

box.append(img,food_name,category)
main_box.append(box)
        

    })
}




async function jumpRamdom(value){
   

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    // var value = document.getElementById("name_input").value;
try{
    let res = await fetch(url);
let out = await res.json();
// console.log(out.meals,"meals")
console.log(out.meals)
showData(out.meals)


}
catch(error){
    console.log(error)
}

}
var value = document.getElementById("name_input").value;
jumpRamdom(value)



const d = new Date();
var week= ["Sunday","Monday","Tuesday","Webnesday","Thursday","Friday","Saturday"]
let day = d.getDay();
document.getElementById("demo").innerHTML ="Day:"+" " +week[day];
