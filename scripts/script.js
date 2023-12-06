const myPara = document.getElementById("para")
console.log(myPara)

function changeValue(){
   if(myPara.textContent === "Fuck Off"){
      myPara.textContent = "Fuck On"
   }
   else{
      myPara.textContent = "Fuck Off"
   } 
}

const myButton = document.querySelector("button");
myButton.onclick = () => {
    changeValue();
}