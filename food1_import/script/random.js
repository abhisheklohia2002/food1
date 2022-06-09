// import { append } from "../../import_and_export/appendFetch";

function navbar(){
    return `  <div><a href="/food1_import/name.html">Name</a></div>
    <div><a href="/food1_import/day.html">Day</a></div>
    <div><a href="/food1_import/random.html">Random</a></div>`
}

export default navbar;

async function main(){
    var value = document.getElementById("name_input").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    // var value = document.getElementById("name_input").value;
try{
    let res = await fetch(url);
let out = await res.json();
// console.log(out.meals,"meals")
// console.log(out)
// append(out.meals)
return out.meals;



}
catch(error){
    console.log(error)
}

// i++
console.log(value)
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

function append(Info,box){
   
    box.innerText= null;


    Info.forEach((elem)=>{
var div = document.createElement("div");
div.setAttribute("id","box")
div.innerText= elem.strMeal;
div.addEventListener("click",()=>{
    

    return elem.strMeal;

})
box.append(div)

    })
}
//GetInfo(strMeal)
async function getInfo(value){

  

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    // var value = document.getElementById("name_input").value;
try{
    let res = await fetch(url);
let out = await res.json();
// console.log(out.meals,"meals")
console.log(out);
// displayData(out.meals)
return out.meals;




}
catch(error){
    console.log(error)
}
}

function displayData(data,box){
    
   
    box.innerHTML = null

    data.forEach((elem)=>{
        console.log(elem);
        var main_box = document.createElement("div")
        main_box.setAttribute("id","main_box")
                var iframe  = document.createElement("img");
                iframe.setAttribute("id","iframe")
            
                iframe.src = elem.strMealThumb;
                var food_name = document.createElement("p");
                food_name.innerText ="Meal:"+" "+ elem.strMeal;
                var category = document.createElement("p");
                category.innerText ="Category:"+" "+ elem.strCategory;
                main_box.append(iframe,food_name,category)
        box.append(main_box);
        


    })
}





async function Method(){
    var url = `https://www.themealdb.com/api/json/v1/1/random.php`;


    try{
        let res = await fetch(url);
    let out = await res.json();
    // console.log(out.meals,"meals")
    console.log(out)
   console.log(out.meals)
   showInfo(out.meals)
    
    
    }
    catch(error){
        console.log(error)
    }

}
// Method();



function showInfo(data){
    var box = document.getElementById("section");
    box.innerText = null

    data.forEach((elem)=>{
var main_box = document.createElement("div")
main_box.setAttribute("id","main_box")
        var iframe  = document.createElement("img");
        iframe.setAttribute("id","iframe")
    
        iframe.src = elem.strMealThumb;
        var food_name = document.createElement("p");
        food_name.innerText ="Meal:"+" "+ elem.strMeal;
        var category = document.createElement("p");
        category.innerText ="Category:"+" "+ elem.strCategory;
        main_box.append(iframe,food_name,category)
box.append(main_box);


    })
}



export{showInfo,Method,displayData,getInfo,append,main,debounceMethod}



