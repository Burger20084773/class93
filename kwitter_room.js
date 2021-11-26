const firebaseConfig = {
      apiKey: "AIzaSyAntsvrBT8HrjwXNrkApgYpXfVf-9GMdxw",
      authDomain: "kwitter-1-8617f.firebaseapp.com",
      databaseURL: "https://kwitter-1-8617f-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-8617f",
      storageBucket: "kwitter-1-8617f.appspot.com",
      messagingSenderId: "1018188470828",
      appId: "1:1018188470828:web:a0f1da07b632031a99cf89",
      measurementId: "G-GLCBCKMH74"
    };

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();