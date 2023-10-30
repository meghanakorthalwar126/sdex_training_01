let form=document.getElementById("myform");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let userid=document.getElementById("userid").value;
    let id=document.getElementById("id").value;
    let title=document.getElementById("Title").value;
    let complete=document.getElementById("Completed").checked;

    let table=document.getElementById("dataTable").getElementsByTagName("tbody")[0]
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = userid;
    cell2.innerHTML = id;
    cell3.innerHTML = title;
        if(complete){
            cell4.innerHTML="yes"
        }
        else{
            cell4.textContent="no"
        }
})
