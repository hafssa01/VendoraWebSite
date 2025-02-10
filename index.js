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
//Burger toggling -------------------------------------------------
function toggleMenu() {
    document.querySelector('.list').classList.toggle('show');
}

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

        // Order form submission
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

//Contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Create a FormData object from the form

    // Send the form data using Fetch API
    fetch('https://formspree.io/f/mqaelrer', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Handle success (e.g., show a success message)
            alert('Message sent successfully!');
            this.reset(); // Reset the form
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error submitting the form:', error);
    });
});