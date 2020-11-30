//Selectors
const changeBg = document.querySelector('.bg-button');
//Event Listeners
changeBg.addEventListener('click',changeBackground);
//Functions
function changeBackground(event){
    event.preventDefault();
    var a = new Array();
    for(var i=0;i<3;i++){
        a.push(Math.floor(Math.random()*255));
    }
    var colour="rgb("+a[0]+","+a[1]+","+a[2]+")";
    document.body.style.backgroundColor=colour;
    document.getElementById('output').innerHTML = colour;
    
}
