
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHwnVm6iRlYU7qp9-JdcwIj0GwVgV7MX0",
  authDomain: "form-62d2b.firebaseapp.com",
  databaseURL: "https://form-62d2b.firebaseio.com",
  projectId: "form-62d2b",
  storageBucket: "form-62d2b.appspot.com",
  messagingSenderId: "966928767435",
  appId: "1:966928767435:web:099ccee5aae42df3737e4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value );
    promise.catch(e => alert(e.message));

    alert("Signed Up")
  
  }


  function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value );
    promise.catch(e => alert(e.message));

    alert("Signed In" + email);

  }

  function signOut(){

    auth.signOut();
    alert("See you next time")
  }


  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active user " + email);

    }else{
      alert("No active User");
    }


  });