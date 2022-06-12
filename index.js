
var myColor="#f1502d"
var theBody = document.getElementById('body');

function changeColor(){
    if(myColor=="#f1502d"){
        myColor="#13c1f9"
    }
    else{
        myColor="#f1502d"
    }
    theBody.style.backgroundColor=myColor
    console.log(myColor)
}
