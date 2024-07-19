document.addEventListener("DOMContentLoaded", function () {
    const yearSelect = document.getElementById('dob-year');
    for (let year = 1900; year <= 2025; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});

function calculateAge() {
    const day = document.getElementById('dob-day').value;
    const month = document.getElementById('dob-month').value;
    const year = document.getElementById('dob-year').value;

    if (day === '' || month === '' || year === '') {
        alert('Please enter a valid date of birth');
        return;
    }

    const dob = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    displayResult(`You are ${age} years old.`);
}

function displayResult(message) {
    const resultContainer = document.createElement('div');
    resultContainer.style.position = 'fixed';
    resultContainer.style.top = '50%';
    resultContainer.style.left = '50%';
    resultContainer.style.transform = 'translate(-50%, -50%)';
    resultContainer.style.padding = '20px';
    resultContainer.style.backgroundColor = '#007BFF';
    resultContainer.style.color = '#fff';
    resultContainer.style.borderRadius = '10px';
    resultContainer.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    resultContainer.style.zIndex = '1000';
    resultContainer.style.textAlign = 'center';
    resultContainer.innerText = message;

    document.body.appendChild(resultContainer);

    setTimeout(() => {
        document.body.removeChild(resultContainer);
    }, 5000);
}