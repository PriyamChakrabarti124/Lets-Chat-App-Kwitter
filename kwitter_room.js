const firebaseConfig = {
    apiKey: "AIzaSyBjJLKPbRys44YeuZY8pmhNKtTO1_g5ljw",
    authDomain: "kwittkwittwer.firebaseapp.com",
    databaseURL: "https://kwittkwittwer-default-rtdb.firebaseio.com",
    projectId: "kwittkwittwer",
    storageBucket: "kwittkwittwer.appspot.com",
    messagingSenderId: "350299055696",
    appId: "1:350299055696:web:4d9277feb67e31304d5355",
    measurementId: "G-JTXGYQLT1S"
  };
  

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_name");

document.getElementById("user_name").innerHTML ="Welcome "+user_name+"!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}