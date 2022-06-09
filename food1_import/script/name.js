// import { append } from "../../import_and_export/appendFetch";

function navbar(){
    return ` <div><a href="name.html">Name</a></div>
    <div><a href="day.html">Day</a></div>
    <div><a href="random.html">Random</a></div>`
}

///IMport the navbar first
export default navbar;

async function main(){
    var value = document.getElementById("name_input").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  
try{
    let res = await fetch(url);
let out = await res.json();

// console.log(out.meals)
// append(out.meals);
return out.meals;




}
catch(error){
   return error;

}


// console.log(value)
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
    // var box = document.getElementById("name");
    box.innerText= null;


    Info.forEach((elem)=>{
var div = document.createElement("div");
div.setAttribute("id","box")
div.innerText= elem.strMeal;
box.append(div)

    })
}

export{debounceMethod,append,main}


