// async function getAllToDo() {
 

//     const url = 'http://localhost:8080/alltodo';

//     var result = await fetch(url, {method: 'GET'});

//     var jResult = await result.json();

//     console.log(jResult);

    
//    $('#div-1').html("<h4> id:- "+jResult.id+ "</h4>");
//    $('#div-2').html("<h3> Title:- "+jResult.title+ "</h3>");
//    $('#div-3').html("<h4> Description:- "+jResult.description+ "</h4>");
//    $('#div-4').html("<h4> Date of Task:- "+jResult.dateToDo+ "</h4>");
   

// }

document.getElementById('getall').addEventListener('click', function () {
    getapi(api_url);
});



    
    // api url
const api_url =
"http://localhost:8080/getall";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data);
if (response) {
    hideloader();
}
show(data);
}
// Calling that async function


// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
let tab =
    `<tr>
    <th> rollno</th>
    <th>firstname</th>
    <th>lastname</th>
    <th>address:</th>
    </tr>`;

// Loop to access all rows
for (let r of data) {
    tab += `<tr> 
<td>${r.rollno} </td>
<td>${r.firstname}</td>
<td>${r.lastname}</td> 
<td>${r.address}</td>          
</tr>`;
}
// Setting innerHTML as tab variable
document.getElementById("employees").innerHTML = tab;
}




    