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

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
  username=document.getElementById("user_name").value;
  localStorage.setItem("User_name", username);
  window.location="kwitter_room.html";
}