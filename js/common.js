function getInputByValue(id)
{

let value = document.getElementById(id).value;

if(isNaN(value) || value<0)
    {

return('Invalid Donation Amount');

    
}
    

  else
  {

    value = parseFloat(value)
    
    return value;
  }
    
}



function getBalancebyId(id){
    let value = document.getElementById(id).innerText;
    value=parseFloat(value);
    return value;
}


function calculate(AmountofInput,CurrentBalance,locatBalance,id,locatTitle){
    if(AmountofInput < 1 || isNaN(AmountofInput))
    {
        alert('Invalid Donation Amount!')
    }
    else if(CurrentBalance < AmountofInput)
    {
        
    alert("You Don't Have Enough Balance!")
    }
    else
    {
        my_modal.showModal();
        document.getElementById(id).innerText = (locatBalance + AmountofInput).toFixed(2);
        document.getElementById('current-balance').innerText = (CurrentBalance - AmountofInput).toFixed(2);
        history(AmountofInput,locatTitle);
    }
}

function history(AmountofInput,locatTitle)
{
    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();
    div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-black', 'rounded-2xl');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${AmountofInput} Taka donated to: ${locatTitle}
        </h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date : 
            ${dateTimeString}
        </p>   
    `;
    document.getElementById('history-div').appendChild(div);
}