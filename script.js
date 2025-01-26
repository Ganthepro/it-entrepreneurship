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

        // console.log('Side 1:', side1);
        // console.log('Side 2:', side2);
        // console.log('Side 3:', side3);

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

    function displayTriangleErrorText(text) {
        const triangleText = document.getElementById('triangleText');
        triangleText.textContent = text;
    }
});

function displayResult(triangleType) {
    const resultElement = document.querySelector('.triangle-type-text');
    if (resultElement) {
        resultElement.innerText = `Triangle Type: ${triangleType}`;
    }
    drawTriangle(triangleType);
}

function classifyTriangle(side1, side2, side3) {
    const sides = [side1, side2, side3].sort((a, b) => a - b);
    const [a, b, c] = sides; 

    if (a === b && b === c) {
        return "Equilateral Triangle";
    }
    if (a === b || b === c || a === c) {
        return "Isosceles Triangle";
    }
    if (a * a + b * b === c * c) {
        return "Right Triangle";
    } else {
        return "Scalene Triangle";
    }
}


function drawTriangle(triangleType) 
{
    var canvas = document.getElementById('triangleCanvas');
    var context = canvas.getContext('2d');
    var width = canvas.width; 
    var height = canvas.height; 

    context.clearRect(0, 0, width, height);
    context.beginPath();

    // Draw the triangle based on the canvas size and the type of triangle
    if (triangleType === "Equilateral Triangle") 
    {
        var topX = width / 2;
        var topY = height * 0.15; 
        var leftX = width * 0.1; 
        var leftY = height * 0.85; 
        var rightX = width * 0.9; 
        var rightY = height * 0.85; 

        context.moveTo(topX, topY);
        context.lineTo(leftX, leftY);
        context.lineTo(rightX, rightY);
        context.lineTo(topX, topY);
    } 
    else if (triangleType === "Isosceles Triangle") 
    {
        var topX = width / 2; 
        var topY = height * 0.1; 
        var leftX = width * 0.3; 
        var leftY = height * 0.9; 
        var rightX = width * 0.7; 
        var rightY = height * 0.9; 

        context.moveTo(topX, topY);
        context.lineTo(leftX, leftY);
        context.lineTo(rightX, rightY);
        context.lineTo(topX, topY);
    } 
    else if (triangleType === "Right Triangle") 
    {
        var topX = width * 0.1; 
        var topY = height * 0.1; 
        var bottomX = width * 0.1; 
        var bottomY = height * 0.9;
        var rightX = width * 0.9; 
        var rightY = height * 0.9; 

        context.moveTo(topX, topY);
        context.lineTo(bottomX, bottomY);
        context.lineTo(rightX, rightY);
        context.lineTo(topX, topY);
    } 
    else if (triangleType === "Scalene Triangle") 
    {
        var topX = width * 0.2; 
        var topY = height * 0.1; 
        var middleX = width * 0.8; 
        var middleY = height * 0.9; 
        var bottomX = width * 0.4; 
        var bottomY = height * 0.7; 

        context.moveTo(topX, topY);
        context.lineTo(middleX, middleY);
        context.lineTo(bottomX, bottomY);
        context.lineTo(topX, topY);
    }

    context.stroke();
}

