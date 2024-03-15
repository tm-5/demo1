var a=document.getElementsByClassName("table")
var b=document.getElementsByClassName("btn")
function hide(){
    if(a[0].style.display==="none"){
        a[0].style.display="";
    }
    else{
        a[0].style.display="none";
    }
}

function sort(columnIndex) {
    alert("Sort by column " + columnIndex);
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbl");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbl");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        td1 = tr[i].getElementsByTagName("td")[1];
        var isFindOut = false;
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                isFindOut = true;
            } else {
                tr[i].style.display = "none";
            }
        }
        if (td1 && !isFindOut) {
            txtValue = td1.textContent || td1.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
        isFindOut = false;

    }
}