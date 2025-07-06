// Task 1: Color Changing Button
document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const colors = ['#4299e1', '#48bb78', '#ed8936', '#e53e3e', '#9f7aea', '#f56565', '#38b2ac', '#ed64a6'];
    let colorIndex = 0;

    colorButton.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        colorButton.style.backgroundColor = colors[colorIndex];
    });

    // Task 2: Time-based Greeting Alert
    const greetingButton = document.getElementById('greetingButton');
    
    greetingButton.addEventListener('click', function() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let greeting = '';
        
        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good Morning! 🌅';
        } else if (currentHour >= 12 && currentHour < 17) {
            greeting = 'Good Afternoon! ☀️';
        } else if (currentHour >= 17 && currentHour < 21) {
            greeting = 'Good Evening! 🌆';
        } else {
            greeting = 'Good Night! 🌙';
        }
        
        const timeString = currentTime.toLocaleTimeString();
        const message = `${greeting}\n\nCurrent time: ${timeString}`;
        
        alert(message);
    });

    // Task 3: Basic Calculator
    const calculateButton = document.getElementById('calculateButton');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
    
    calculateButton.addEventListener('click', function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Please enter valid numbers!';
            resultDiv.style.background = '#fed7d7';
            resultDiv.style.borderColor = '#f56565';
            resultDiv.style.color = '#742a2a';
        } else {
            const sum = num1 + num2;
            resultDiv.textContent = `${num1} + ${num2} = ${sum}`;
            resultDiv.style.background = '#e6fffa';
            resultDiv.style.borderColor = '#81e6d9';
            resultDiv.style.color = '#234e52';
        }
    });

    // Add Enter key support for calculator
    num1Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            num2Input.focus();
        }
    });
    
    num2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateButton.click();
        }
    });
}); 