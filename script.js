//http://api.weatherapi.com/v1/current.json?key=10fec1863164473f9be184955250706&q=Noida&aqi=no

console.log("JavaScript is connected and running!");

const tempfield=document.querySelector("#temp");
const locName=document.querySelector("#place");
const condition=document.querySelector("#condition");
const time=document.querySelector("#ddd");
const searchbar=document.querySelector("#searchbox input");
const button=document.querySelector("#bttn button");

 button.addEventListener("click",function(){
  target=searchbar.value.trim();
  if(target!==""){
  fetchResult(target);}
  else alert("You have not entered the location");
})

let target= "Noida";
const fetchResult = async(target)=>{

    let url=`https://api.weatherapi.com/v1/current.json?key=10fec1863164473f9be184955250706&q=${target}&aqi=no`;
   const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    locName.innerText = data.location.name;
    tempfield.innerText = data.current.temp_c + " °C";
    condition.innerText = data.current.condition.text;
    time.innerText = data.location.localtime;
}
fetchResult(target)

const heading=document.querySelector("#title");
heading.addEventListener("mouseover",function(){
    heading.style.color="yellow";
})
heading.addEventListener("mouseout",function(){
    heading.style.color="white";
})
button.addEventListener("mouseover",function(){
    button.style.color="white";
    button.style.backgroundColor="black";
})
button.addEventListener("mouseout",function(){
    button.style.color="black";
    button.style.backgroundColor="white";
})
