var buttonToggle = document.getElementById("buttonToggle") ;
var formData = [];
var userName =document.getElementById("uname");
var userPhone =document.getElementById("uphone");
var userLocation =document.getElementById("ulocation");
var userEmail =document.getElementById("umail");
var inputs=document.getElementsByTagName("input");
var formData=JSON.parse(localStorage.getItem("formData"));
 showData();
function showHide() {
    var div= document.getElementById("form-container");
    if(div.style.display=="none"){
        
        div.style.display="block";
        buttonToggle.innerHTML='hide <i class="fas fa-arrow-alt-circle-up"></i>'
       }
       else{
        div.style.display="none"
        buttonToggle.innerHTML='show <i class="fas fa-arrow-alt-circle-down"></i>'

       }
    
}

function record() {
    if(userName.value !='' && userEmail.value !='' && userPhone.value !='' && userLocation.value !=''){
        
    var person = {name:userName.value,phone:userPhone.value,email:userEmail.value,location:userLocation.value};
        formData.push(person);
        localStorage.setItem("formData",JSON.stringify(formData));
        showData();
        clearForm();
        }
    else
        {
            alert("all fields  are required!!!");
        }
        
}
function showData(){
    var row="";
    for(var i=0;i<formData.length;i++){
        row +='<tr><td>'+formData[i].name+'</td><td>'+formData[i].phone+'</td><td>'+formData[i].email+'</td><td>'+formData[i].location+'</td><td><button class="btn btn-success btn-sm mr-1">Edit</button><button onclick="deleteRow(this)" class="btn btn-danger btn-sm">Delete</button></td></tr>';
    }
        document.getElementById("formData").innerHTML=row;
    }
function clearForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value='';
    }
}
function deleteRow(x) {
    var i = x.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("formData").deleteRow(i);
//    localStorage.removeItem("formData");

}