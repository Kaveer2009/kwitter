
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDORypw2h2Z4Ce3gJpIb0IZxh6o1Ue4oAw",
  authDomain: "kwitter-kaveer-473e5.firebaseapp.com",
  databaseURL: "https://kwitter-kaveer-473e5-default-rtdb.firebaseio.com",
  projectId: "kwitter-kaveer-473e5",
  storageBucket: "kwitter-kaveer-473e5.appspot.com",
  messagingSenderId: "503762463165",
  appId: "1:503762463165:web:ea52bd2de1e5d399050ad4"
    };
    
    // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

    firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("names");
    document.getElementById("wlcm_h3").innerHTML = "Welcome " + username + "!"

    console.log(username);

    function addroom(){
      var roomname = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingRoomName"
      });

      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname - " + Room_names);


      row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row; 


      //End code
      });});}

getData();

function logout(){
      localStorage.removeItem("names");
      localStorage.removeItem("roomname");
      window.location="index.html"
}

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="kwitter_page.html";
}