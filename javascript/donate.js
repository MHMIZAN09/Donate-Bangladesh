

document.getElementById('btn-donate-Noakhali').addEventListener('click', function () {

    const newDonateBalance = getInputFieldValue('input-donate-Noakhali');

    const currentDonateBalance = getTextFieldValue('donateBalance');

    const totalAccountBalance = getTextFieldValue('total-balance');


    if (!isNaN(newDonateBalance) && newDonateBalance > 0) {
        const donateBalance = currentDonateBalance + newDonateBalance;
        document.getElementById('donateBalance').innerText = donateBalance;

        if (totalAccountBalance > 0 && totalAccountBalance >= newDonateBalance) {
            const myBalance = totalAccountBalance - newDonateBalance;
            document.getElementById('total-balance').innerText = myBalance;
            document.getElementById('input-donate-Noakhali').value = '';
            document.getElementById('my_modal_5').showModal();
        } else {
            alert('Insufficient funds!');
        }


    } else {
        alert('Please enter the number not other!');
    }

});
