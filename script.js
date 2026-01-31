const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .product-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-active');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.add('cursor-active');
    });
});

let currentbalance = 0;
function updateMoney(price) {
    currentbalance += price;
    document.getElementById('money-display').innerText = currentbalance.toLocaleString() + " ฿";

    alert("เพิ่มสินค้าลงในตะกร้าเเล้ว!");
}
