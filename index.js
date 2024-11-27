document.getElementById('ordernow').addEventListener('click',function(){
    const from = document.getElementById('orderform');
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