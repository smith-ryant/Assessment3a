console.log("hello world");


// handles the Submit for how did you hear about us.
function handleSubmit(evt) {
	evt.preventDefault();
	alert('The form has been submitted successfully.')	
	console.log('form submit');
}

let form = document.querySelector('#contact');
form.addEventListener('change', handleSubmit);
//let google = document.querySelector('#google')
let picture = document.querySelector('#picture');
let google = document.querySelector('#google');
let friend = document.querySelector('#friend');
let other = document.querySelector('#other');

// Add mouseover event
picture.addEventListener('mouseover', function() {
    alert('You have a great taste in pictures!');
	console.log(MouseEvent);
});


//add google checkbox listener
google.addEventListener('change', handleSubmit);
friend.addEventListener('change', handleSubmit);
other.addEventListener('change', handleSubmit);
