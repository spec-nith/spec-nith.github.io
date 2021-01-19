var firebaseConfig = {
    apiKey: "AIzaSyAz30Jej-JZGKdt4IUmws7F6RDlrnXXYHg",
    authDomain: "simple-form-95057.firebaseapp.com",
    projectId: "simple-form-95057",
    databaseURL: 'https://simple-form-95057-default-rtdb.firebaseio.com/',
    storageBucket: "simple-form-95057.appspot.com",
    messagingSenderId: "65131409606",
    appId: "1:65131409606:web:c3ceb0d1f0025727fe67c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var dataRef = firebase.database().ref('Data');

document.getElementById("simpleForm").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var details = {
        "Name": getInputVal('name'),
        "email": getInputVal('email'),
        "Message": getInputVal('message')
    };
    console.log(details);

// save Message
    saveData(details);
    alert("Your Message has been recorded. Hang tight we will contact you soon!")
    // 
    clearInput('name').value = "";
    clearInput('email').value = "";
    clearInput('message').value = "";
}

// funtion to input form values
function getInputVal(id) {
    return document.getElementById(id).value;
}
function clearInput(id) {
    return document.getElementById(id);
}

//function to push data in firebase database

function saveData(object){
    var newDataRef = dataRef.push();
    newDataRef.set(object);
}