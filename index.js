document.getElementById('ordernow').addEventListener('click',function(){
    const from = document.getElementById('orderform');
    from.style.display = 'block'
    document.body.classList.add('modal-open');
});