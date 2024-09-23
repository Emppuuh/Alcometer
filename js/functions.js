function calculate() {
    const weight = parseFloat(document.getElementById('weight').value);
    const time = parseFloat(document.getElementById('time').value);
    const bottles = parseFloat(document.getElementById('bottles').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = Math.max(0, grams - (burning * time));

    let result;
    if (gender === 'male') {
        result = gramsLeft / (weight * 0.7);
    } else {
        result = gramsLeft / (weight * 0.6);
    }

    document.getElementById('result').textContent = result.toFixed(2);
}