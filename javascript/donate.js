document.getElementById('btn-donate-Noakhali').addEventListener('click', function () {
    const newDonateBalance = getInputFieldValue('input-donate-Noakhali');
    const currentDonateBalance = getTextFieldValue('donateBalance');
    const totalAccountBalance = getTextFieldValue('total-balance');
    const titleElement = document.getElementById('title');
    const title = titleElement ? titleElement.innerText : "No Title";

    if (!isNaN(newDonateBalance) && newDonateBalance > 0) {
        const donateBalance = currentDonateBalance + newDonateBalance;
        document.getElementById('donateBalance').innerText = donateBalance;

        if (totalAccountBalance > 0 && totalAccountBalance >= newDonateBalance) {
            const myBalance = totalAccountBalance - newDonateBalance;
            document.getElementById('total-balance').innerText = myBalance;
            document.getElementById('input-donate-Noakhali').value = '';
            document.getElementById('my_modal_5').showModal();

            const defaultMessage = document.getElementById('default-history-message');
            if (defaultMessage) {
                defaultMessage.remove();
            }
            const date = new Date().toString();

            const historySection = document.getElementById('history-section');
            const entry = document.createElement('div');
            entry.innerHTML = `
               <div class="card bg-base-100 w-full m-5">
                <div class="card-body border rounded-xl">
                    <h2 class="card-title text-black font-bold">${newDonateBalance} Taka is ${title}</h2>
                    <p>Data:${date}</p>
                </div>
            </div>
            `;
            historySection.appendChild(entry);
        } else {
            alert('Insufficient funds!');
        }
    } else {
        alert('Please enter a valid number!');
    }
});

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const newDonateBalance = getInputFieldValue('input-donate-feni');
    const currentDonateBalance = getTextFieldValue('donateBalanceFeni');
    const totalAccountBalance = getTextFieldValue('total-balance');

    const titleElement = document.getElementById('title2');
    const title = titleElement ? titleElement.innerText : "No Title";
    if (!isNaN(newDonateBalance) && newDonateBalance > 0) {
        const donateBalance = currentDonateBalance + newDonateBalance;
        document.getElementById('donateBalanceFeni').innerText = donateBalance;

        if (totalAccountBalance > 0 && totalAccountBalance >= newDonateBalance) {
            const myBalance = totalAccountBalance - newDonateBalance;
            document.getElementById('total-balance').innerText = myBalance;
            document.getElementById('input-donate-feni').value = '';
            document.getElementById('my_modal_5').showModal();

            const defaultMessage = document.getElementById('default-history-message');
            if (defaultMessage) {
                defaultMessage.remove();
            }
            const date = new Date().toString();

            const historySection = document.getElementById('history-section');
            const entry = document.createElement('div');
            entry.innerHTML = `
               <div class="card bg-base-100 w-full m-5">
                <div class="card-body border rounded-xl">
                    <h2 class="card-title text-black font-bold">${newDonateBalance} Taka is ${title}</h2>
                    <p>Data:${date}</p>
                </div>
            </div>
            `;
            historySection.appendChild(entry);
        } else {
            alert('Insufficient funds!');
        }
    } else {
        alert('Please enter a valid number!');
    }
});

document.getElementById('btn-donate-quota').addEventListener('click', function () {
    const newDonateBalance = getInputFieldValue('input-donate-quota');
    const currentDonateBalance = getTextFieldValue('donateBalanceQuota');
    const totalAccountBalance = getTextFieldValue('total-balance');
    const titleElement = document.getElementById('title3');
    const title = titleElement ? titleElement.innerText : "No Title";
    if (!isNaN(newDonateBalance) && newDonateBalance > 0) {
        const donateBalance = currentDonateBalance + newDonateBalance;
        document.getElementById('donateBalanceQuota').innerText = donateBalance;

        if (totalAccountBalance > 0 && totalAccountBalance >= newDonateBalance) {
            const myBalance = totalAccountBalance - newDonateBalance;
            document.getElementById('total-balance').innerText = myBalance;
            document.getElementById('input-donate-quota').value = '';
            document.getElementById('my_modal_5').showModal();

            const defaultMessage = document.getElementById('default-history-message');
            if (defaultMessage) {
                defaultMessage.remove();
            }
            const date = new Date().toString();

            const historySection = document.getElementById('history-section');
            const entry = document.createElement('div');
            entry.innerHTML = `
               <div class="card bg-base-100 w-full">
                <div class="card-body border rounded-xl m-4">
                    <h2 class="card-title text-black font-bold">${newDonateBalance} Taka is ${title}</h2>
                    <p>Data:${date}</p>
                </div>
            </div>
            `;
            historySection.appendChild(entry);


        } else {
            alert('Insufficient funds!');
        }
    } else {
        alert('Please enter a valid number!');
    }
});

document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
});

document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
