const noakhaliButton = document.getElementById('noakhali-btn')
const feniButton = document.getElementById('feni-btn')
const quotaButton = document.getElementById('quota-btn')

const historyButton = document.getElementById('history-btn');
const donationButton = document.getElementById('donation-btn');

const donationSection =  document.getElementById('donation-sec');
const historySection = document.getElementById('history-sec');


// click handles
donationButton.addEventListener('click',function(){
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');


})

// History button Click

historyButton.addEventListener('click',function(){
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');

})



// handles all
// quota
quotaButton.addEventListener('click',function(){
    
    const myBalance = getBalance('current-balance')
    const inputAmount = getInputValue('quota-input-value');
    const quotaBalance = getBalance('quota-balance')
    const quotaTitle = document.getElementById('quota-title').innerText;

    calculate(inputAmount,myBalance,quotaBalance,'quota-balance',quotaTitle);

})

// noakhali
noakhaliButton.addEventListener('click',function(){
    
    const myBalance = getBalance('current-balance')
    const inputAmount = getInputValue('noakhali-input-value');
    const noakhaliBalance = getBalance('noakhali-balance')
    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    calculate(inputAmount,myBalance,noakhaliBalance,'noakhali-balance',noakhaliTitle);

})


// feni
feniButton.addEventListener('click',function(){
    
    const myBalance = getBalance('current-balance')
    const inputAmount = getInputValue('feni-input-value');
    const feniBalance = getBalance('feni-balance')
    const feniTitle = document.getElementById('feni-title').innerText;

    calculate(inputAmount,myBalance,feniBalance,'feni-balance',feniTitle);

})

// Chellange Part : Button Color Change

document.getElementById("donation-btn").addEventListener("click", function() {
  
    this.classList.add("active");
    this.classList.remove("inactive");
    document.getElementById("history-btn").classList.add("inactive");
    document.getElementById("history-btn").classList.remove("active");
});

document.getElementById("history-btn").addEventListener("click", function() {

    this.classList.add("active");
    this.classList.remove("inactive");
    document.getElementById("donation-btn").classList.add("inactive");
    document.getElementById("donation-btn").classList.remove("active");
});