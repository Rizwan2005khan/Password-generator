function generatePassword() {
    const length = document.getElementById('plength').value;
    const includeUppercase = document.getElementById('puppercase').checked;
    const includeLowercase = document.getElementById('plowercase').checked;
    const includeNumbers = document.getElementById('pnumber').checked;
    const includeSymbols = document.getElementById('psymbol').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let allChars = '';
    let password = '';
    if (includeUppercase) allChars += uppercase;
    if (includeLowercase) allChars += lowercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;
    if (allChars.length === 0) {
        alert('Please select at least one character type.');
        return '';
    }

    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return password;
}

document.getElementById('submit').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('pwd').value = password;
});

document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('pwd');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
});
