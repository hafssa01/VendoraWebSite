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
    form.style.display = 'flex'
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
        let phone = this.value.replace(/[a-zA-Z]/g, '');
        phone = phone.slice(0, 10);
        this.value = phone;
    }, 0);
});

// fullname validation
const fullnameField = document.getElementById('fullname');
const errorMessage = document.getElementById('error-message');

fullnameField.addEventListener('input', function () {
    let input = fullnameField.value;
    let validInput = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
            validInput += char;
        } else {
            errorMessage.style.display = 'block';
        }
    }

    fullnameField.value = validInput;
    if (errorMessage.style.display === 'block' && validInput === input) {
        errorMessage.style.display = 'none';
    }
});
// Post code
document.getElementById('postcode').addEventListener('input', function () {
    setTimeout(() => {
        let postcode = this.value.replace(/[^0-9]/g, '');
        postcode = postcode.slice(0, 5);
        this.value = postcode;
    }, 0);
});

// Update total dynamically based on quantity in ---"Order Form"---
document.getElementById('quantity').addEventListener('input', function () {
    const unitPrice = 1171.25;
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
    window.scrollTo({
        top: form.offsetTop,
        behavior: 'smooth'
    });
});

//Submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value.trim();
    const address = document.getElementById('address').value.trim();
    const postcode = document.getElementById('postcode').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const submitError = document.getElementById('submit-error')
    const submitReceived = document.getElementById('submit-received')

      if (!fullname || !address || !postcode || !phone || !quantity) {
        event.preventDefault();
        submitError.style.display = 'block'
        submitReceived.style.display = 'none'
    }else{
        submitReceived.style.display = 'block'
        submitError.style.display = 'none'
        
         // Prepare data to send in the fetch request
         const formData = new FormData();
         formData.append('fullname', fullname);
         formData.append('address', address);
         formData.append('postcode', postcode);
         formData.append('phone', phone);
         formData.append('quantity', quantity);
         formData.append('total', total);

        // Form submission
        fetch("https://formspree.io/f/xyzkplqd", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // On success, redirect to the custom Thank You page
                window.location.href = './thank-you.html';
                // On success, reset the form
                document.querySelector('form').reset();
            } else {
                throw new Error("Form submission failed");
                
            }
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
        });
    }
});
//----------------------------------------------------------------------