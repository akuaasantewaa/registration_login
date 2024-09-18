// // Select form by name
const registerForm = document.querySelector('#register-form');
// console.log(registerForm);
//  Handle form submit event
registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      //      // Collect form data
      const formData = new FormData(registerForm);
      console.log(
            formData.get('username'),
            formData.get('email'),
            formData.get('password')
      );
      




});



// Save user information
// Send confirmation email
// Display success message
const messageH1 = document.querySelector('#message');
messageH1.textContent = 'Account register successfully!';
//});
// Age variable
//const age = 44;
// Square of age
//function squareAge(age) {
//const squaredAge = age ** 2;
// return squaredAge;
//}

//const squaredAge = squareAge(45);
//console.log(squaredAge);

// functio to get full name
//function fullName(fistname, lastname) {
//return first + lastname;
// return `${fistname} ${lastname}`;
//}

//const myFullName = fullName('Nhyira', 'Dadzie');
// console.log(myFullName);
