//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("USER_NAME");
room_name=localStorage.getItem("ROOM_NAME");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
           });
           document.getElementById("msg").value="";
}


