function addUser(){
    user_name = document.getElementById("user_input_name").value;
    localStorage.setItem("USER_NAME",user_name);
    window.location="kwitter_room.html";
}