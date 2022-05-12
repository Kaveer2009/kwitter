//YOUR FIREBASE LINKS

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
    var roomname = localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            console.log(firebase_message_id);
            console.log(message_data);

            uname = message_data["name"];
            message = message_data["message"];
            like = message_data["like"];

            name_with_tag="<h4>"+uname+"<img class='user_tick' src='tick.png'></h4>";
            message_with_tag="<h4 class='message_h4>'>"+message+"</h4>";
            like_button="<button class='btn btn-danger' id="+firebase_message_id +" value="+like +" onclick='updatelike(this.id)'>";
            span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";

            row = name_with_tag+message_with_tag+like_button+span_with_tag;

            document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function sendmes(){
      message = document.getElementById("input_message").value;
      firebase.database().ref(roomname).push({
            name : username,
            message : message,
            like : 0
      });
      document.getElementById("input_message").innerHTML = "";
}

function updatelike(message_id){
      console.log(message_id);
      button_id=message_id;
      like = document.getElementById(button_id).value;
      update_like=Number(like)+ 1;
      console.log(update_like);

      firebase.database().ref(roomname).child(message_id).update({
             like : update_like
            });

}

function logout1(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("names");

      window.location="index.html";
}