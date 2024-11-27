document.getElementById('orderNow').addEventListener('click',function(){
    const from = document.getElementById('orderForm');
    from.style.display = 'block'
    document.body.classList.add('modal-open');
});

// Close the form when the "Cancel" button is clicked
document.getElementById('closeForm').addEventListener('click', function () {
    const form = document.getElementById('orderForm');
    form.style.display = 'none';
    document.body.classList.remove('modal-open');
});

// Update total dynamically based on quantity
document.getElementById('quantity').addEventListener('input', function () {
    const unitPrice = 1171.25; // Price per unit
    const quantity = parseInt(this.value) || 1; // Default to 1 if empty
    document.getElementById('total').value = (unitPrice * quantity).toFixed(2);
});

document.getElementById('Postcode').addEventListener('input', function() {
    const postcode = this.value;
    if(isNaN(postcode) || postcode.length > 5){
        alert('You must enter only up to 5 numeric digits!')
        this.value = postcode.slice(0, 5);
    }
})


document.getElementById('phone').addEventListener('input',function(){
    const phone = this.value;
    if(isNaN(phone) || phone.length > 10){
        alert('You must enter only 10 numbers');
        this.value = phone.slice(0, 10);
    }
})