document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('triangleForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);

        if (!validateInput(side1, side2, side3)) {
            return;
        }

        const triangleType = classifyTriangle(side1, side2, side3);
        displayResult(triangleType);
    });

    function validateInput(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            displayTriangleErrorText('All side lengths must be positive numbers');
            return false;
        }

        if (!(a + b > c && b + c > a && a + c > b)) {
            displayTriangleErrorText('These side lengths cannot form a valid triangle');
            return false;
        }
        
        return true;
    }

    function displayResult(type) {
        displayTriangleSVG(type);
        displayTriangleText(type);
    }


    function displayTriangleErrorText(text) {
        const triangleText = document.getElementById('triangleText');
        triangleText.textContent = text;
    }
});