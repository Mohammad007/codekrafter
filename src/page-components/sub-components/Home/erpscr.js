// erpscr.js

// Function to handle mouse movement for parallax effect
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 350;
        var y = (e.clientY * moving_value) / 350;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

// Add event listener for mouse movement
document.addEventListener("mousemove", parallax);

// Add event listener for scroll events
window.addEventListener('scroll', function () {
    const erpBox = document.getElementById('dharma-erp');
    const circleProducts = document.querySelectorAll('.product.circle img');
    const squareProducts = document.querySelectorAll('.product.square img');
    if (window.scrollY > 200) { // Adjust this value as needed
        if (erpBox) {
            erpBox.classList.add('erp-box-expanded');
        }
        circleProducts.forEach(function (circle) {
            circle.classList.add('circle-shrink');
        });
        squareProducts.forEach(function (square) {
            square.style.width = '80px';
            square.style.height = '80px';
        });
    } else {
        if (erpBox) {
            erpBox.classList.remove('erp-box-expanded');
        }
        circleProducts.forEach(function (circle) {
            circle.classList.remove('circle-shrink');
        });
        squareProducts.forEach(function (square) {
            square.style.width = '87px';
            square.style.height = '87px';
        });
    }
});
