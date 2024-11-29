// Reveal the product section when "Learn More" is clicked in ---"Hero Section"---
document.getElementById('showProduct').addEventListener('click', function () {
    const productSection = document.getElementById('productSection');
    productSection.style.display = 'flex';
    window.scrollTo({
        top: productSection.offsetTop,
        behavior: 'smooth'
    });
});

//---------------------------------------------------------------------------

//Product Section Order Now Button --------------------------------------
document.getElementById('orderNow').addEventListener('click',function(){
    const form = document.getElementById('orderForm');
    form.style.display = 'block'
    document.body.classList.add('modal-open');
    window.scrollTo({
        top: form.offsetTop,
        behavior: 'smooth'
    });
});
//------------------------------------------------------------------------

// Order Form section -----------------------------------------------------------
// Phone number field
document.getElementById('phone').addEventListener('input', function () {
    setTimeout(() => {
        let phone = this.value.replace(/[a-zA-Z]/g, ''); // Remove alphabets
        phone = phone.slice(0, 10); // Restrict to 10 digits
        this.value = phone; // Update the value
    }, 0);
});

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
// Post code
document.getElementById('postcode').addEventListener('input', function () {
    setTimeout(() => {
        let postcode = this.value.replace(/[a-zA-Z]/g, ''); // Remove alphabets
        postcode = postcode.slice(0, 5); // Restrict to 5 digits
        this.value = postcode; // Update the value
    }, 0);
});

// Update total dynamically based on quantity in ---"Order Form"---
document.getElementById('quantity').addEventListener('input', function () {
    const unitPrice = 1171.25; // Price per unit
    let quantityInput = document.getElementById('quantity').value
    
    quantityInput = quantityInput.replace(/[^0-9]/g, '')
    document.getElementById('quantity').value = quantityInput;

    if(!quantityInput){
        document.getElementById('total').value = '0.00'

    }else{
        
        document.getElementById('total').value = (unitPrice * quantityInput).toFixed(2); 
        
    }


});

//-----------------------------------------------------------------------

//Form Buttons---------------------------------------------------------
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

//Submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // document.querySelector('form').reset();
    document.getElementById('total').value = '0';
    

    const fullname = document.getElementById('fullname').value.trim();
    const address = document.getElementById('Adress').value.trim();
    const postcode = document.getElementById('postcode').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const submitError = document.getElementById('submit-error')
    const submitReceived = document.getElementById('submit-received')

    
      // Check that all fields are filled out
      if (!fullname || !address || !postcode || !phone || !quantity) {
        submitError.style.display = 'block'
        submitReceived.style.display = 'none'
    }else{
        submitReceived.style.display = 'block'
        submitError.style.display = 'none'
        document.querySelector('form').reset();
    }
});
//----------------------------------------------------------------------



//----------------------------------------------------------------------










