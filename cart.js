function getCart() {
  try { return JSON.parse(localStorage.getItem('lumiere_cart') || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('lumiere_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  updateCartBadge();
  showToast();
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
  if (typeof renderCart === 'function') renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline-flex' : 'none';
  });
}

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Init badge on page load
document.addEventListener('DOMContentLoaded', updateCartBadge);
