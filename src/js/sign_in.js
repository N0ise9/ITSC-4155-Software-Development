function grayout() {
    if (document.getElementById("email").value==="") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
}