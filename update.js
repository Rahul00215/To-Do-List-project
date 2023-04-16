

async function getToDoData() {
    const rollno = $('#inp-1').val();
    const name = $('#inp-2').val();
    const last = $('#inp-3').val();
    const address = $('#inp-4').val();

    const url = 'http://localhost:8080/update?rollno='+rollno+'&name='+name+'&last='+last+'&address='+address;

    var result = await fetch(url, {method: 'PUT'});

    var jResult = await result.json();

    console.log(jResult);

    if (jResult.rollno == null) {
        $('#div-1').html("<h1> USER is not availble.....</h1>");        
    } else {
        $('#div-1').html("<h1> rollno:- "+jResult.rollno+ "</h1>");
        $('#div-2').html("<h1> firstname:- "+jResult.firstname+ "</h1>");
        $('#div-3').html("<h1> lastname:- "+jResult.lastname+ "</h1>");
        $('#div-4').html("<h1> address:- "+jResult.address+ "</h1>");
    }


}

document.getElementById('btn-1').addEventListener('click', function () {

    getToDoData();
});

    