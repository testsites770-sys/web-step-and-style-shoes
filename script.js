// State management
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

// Add to cart functionality
function addToCart(productName) {
    cartCount++;
    cartCountElement.innerText = cartCount;
    
    // Simple visual feedback (Toast)
    showToast(`המוצר "${productName}" התווסף לסל בהצלחה!`);
    
    // Animation on cart icon
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.classList.add('scale-125', 'text-blue-600');
    setTimeout(() => {
        cartIcon.classList.remove('scale-125', 'text-blue-600');
    }, 300);
}

// Toast notification logic
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Mobile Menu Toggle (Simplified for demo)
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    alert('תפריט הניווט יופיע כאן בגרסת המובייל המלאה');
});

// Smooth reveal on scroll for product cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700');
    observer.observe(card);
});