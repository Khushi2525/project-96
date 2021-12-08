var firebaseConfig = {
      apiKey: "AIzaSyA0MWjpQVLe7qFIQ-V-9ml9Q3suHqBG_dw",
      authDomain: "let-s-chat--app-project.firebaseapp.com",
      databaseURL: "https://let-s-chat--app-project-default-rtdb.firebaseio.com",
      projectId: "let-s-chat--app-project",
      storageBucket: "let-s-chat--app-project.appspot.com",
      messagingSenderId: "1056507614790",
      appId: "1:1056507614790:web:8e666927ae2308e99f9c47",
      measurementId: "G-8C79HHBKT4"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("USER_NAME");
document.getElementById("user_name_display").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
       room_name = document.getElementById("add_room").value;
        firebase.database().ref("/").child(room_name).update({ 
              purpose: "adding room name"
             });
   localStorage.setItem("ROOM_NAME",room_name);
   window.location = "kwitter_page.html";
            }

  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("ROOM_NAME",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("USER_NAME");
      localStorage.removeItem("ROOM_NAME");
      window.location="index.html";
}
