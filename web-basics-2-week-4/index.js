//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here


let child = document.createElement("div")
document.getElementById("a-1").appendChild(child)

child.className = "square"
child.textContent = "x"

child.addEventListener("click", function()  {
    
        if (child.textContent === "x") {
          child.textContent = "o";
         } else { child.textContent = "x" }


});




//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
//resolve // QUESTION 2 here

let dropDown = document.createElement("select")



for (i = 0; i < colors.length; i++) {

    var choice = colors[i];
    var el = document.createElement("option");
    el.value = choice;
    el.innerHTML = choice;     //textContent is perfered
   dropDown.appendChild(el); 
}
  
document.getElementById("a-2").appendChild(dropDown);

    let button = document.createElement("button")
    button.type = "button"
    button.textContent = "Remove"

    document.getElementById("a-2").appendChild(button)

    button.addEventListener("click", function() 
    
    {
    let selected = document.getElementsByTagName("select")

    dropDown

    dropDown.remove(selected)

    })




//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculateSphere = () =>{

let radius = document.getElementById("radius");
radius = parseInt(radius.value);
console.log("type of raduis", radius );

let volume = (4/3) * Math.PI * Math.pow (radius, 3);

console.log(volume);

let area = 4 * Math.PI * Math.pow (radius, 2);
console.log(area);

document.getElementById("area").value = area;
document.getElementById("volume").value  = volume; 

 }




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here

 const button1 = document.createElement("button");

//button.type = "button";
button1.textContent = "hide Q1";
document.getElementById("a-4").appendChild(button1)

button1.addEventListener("click", function () {


    if (document.getElementById("a-1").style.display === "none") {
        document.getElementById("a-1").style.display = "block";
        button1.textContent = "hide Q1 "
    } else { 
        document.getElementById("a-1").style.display = "none"
        button1.textContent = "show Q1"
    }

    console.log(document.getElementById("a-1").style.display);

    }

 )

const button2 = document.createElement("button");

//button.type = "button";
button2.textContent = "hide Q2";
document.getElementById("a-4").appendChild(button2)

button2.addEventListener("click", function () {


    if (document.getElementById("a-2").style.display === "none") {
        document.getElementById("a-2").style.display = "block";
        button2.textContent = "hide Q2"
    } else { 
        document.getElementById("a-2").style.display = "none"
        button2.textContent = "show Q2"
    }

    console.log(document.getElementById("a-2").style.display);

    }

)


const button3 = document.createElement("button");

button3.type = "button";
button3.textContent = "hide Q3";
document.getElementById("a-4").appendChild(button3)

button3.addEventListener("click", function () {


    if (document.getElementById("a-3").style.display === "none") {
        document.getElementById("a-3").style.display = "block";
        button3.textContent = "hide Q3"
    } else { 
        document.getElementById("a-3").style.display = "none"
        button3.textContent = "show Q3"
    }

    console.log(document.getElementById("a-3").style.display);

    }

)