function adduser(){
    var username = document.getElementById("username").value;
    localStorage.setItem("names", username);
    window.location="kwitter_room.html";
}
