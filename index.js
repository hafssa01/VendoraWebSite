document.getElementById('orderNow').addEventListener('click',function(){
    const form = document.getElementById('orderForm');
    form.style.display = 'block'
    document.body.classList.add('modal-open');
    window.scrollTo({
        top: form.offsetTop,
        behavior: 'smooth'
    });
});

// Reveal the product section when "Learn More" is clicked
document.getElementById('showProduct').addEventListener('click', function () {
    const productSection = document.getElementById('productSection');
    productSection.style.display = 'flex';
    window.scrollTo({
        top: productSection.offsetTop,
        behavior: 'smooth'
    });
});

// Close the form when the "Cancel" button is clicked
document.getElementById('closeForm').addEventListener('click', function () {
    const form = document.getElementById('orderForm');
    form.style.display = 'none';
    document.body.classList.remove('modal-open');
    window.scrollTo({
        top: form.offsetTop,
        behavior: 'smooth'
    });
});

// Update total dynamically based on quantity
document.getElementById('quantity').addEventListener('input', function () {
    const unitPrice = 1171.25; // Price per unit
    const quantity = parseInt(this.value) || 1; // Default to 1 if empty
    if(!isNaN(quantity)){

    
        document.getElementById('total').value = (unitPrice * quantity).toFixed(2);
    }
});

document.getElementById('Postcode').addEventListener('input', function() {
    const postcode = this.value;
    if(isNaN(postcode) || postcode.length > 5){
        alert('You must enter only up to 5 numeric digits!')
        this.value = postcode.slice(0, 5);
    }
})
// Pone number field
document.getElementById('phone').addEventListener('input',function(){
    const phone = this.value
    if(phone.length > 10){
        alert('You must enter only 10 numbers');
        this.value = phone.slice(0, 10);
    }
    this.value = phone;
})

// fullname validation
const fullnameField = document.getElementById('fullname');
const errorMessage = document.getElementById('error-message');

fullnameField.addEventListener('input', function () {
    let input = fullnameField.value;
    let validInput = '';

    // Loop through each character in the input
    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        // Allow only letters (uppercase, lowercase) and spaces
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
            validInput += char; // Add valid characters to validInput
        } else {
            errorMessage.style.display = 'block'; // Show error message for invalid characters
        }
    }

    fullnameField.value = validInput; // Update the input field with valid characters
    if (errorMessage.style.display === 'block' && validInput === input) {
        errorMessage.style.display = 'none'; // Hide error message when input is valid
    }
});