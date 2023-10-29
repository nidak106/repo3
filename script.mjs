function convertYardsToSquareFeet() {
    var yards = parseFloat(document.getElementById('yardsInput').value);
    var squareFeet = yards * 9; // 1 yard = 3 feet, so 1 yard * 3 feet/yard * 3 feet/yard = 9 square feet
    document.getElementById('result').innerHTML = yards + ' yards is equal to ' + squareFeet + ' square feet.';
}
