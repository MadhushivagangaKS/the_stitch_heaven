const WA_PHONE = '+919353445051';
const INSTAGRAM_URL = 'https://instagram.com/thestitch_heaven';

const catalog = document.getElementById('catalog');
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const waButton = document.getElementById('wa-button');
const instagramLink = document.getElementById('instagram-link');
const closeButton = document.getElementById('modal-close');

async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error('Failed to load products');
    }

    const products = await response.json();
    catalog.innerHTML = products.map(product => `
      <article class="card">
        <button class="card-btn" data-id="${product.id}" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="card-info">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-sub">${product.description}</p>
          </div>
        </button>
      </article>
    `).join('');

    catalog.querySelectorAll('.card-btn').forEach(button => {
      button.addEventListener('click', () => openModal(button.dataset.id));
    });
  } catch (error) {
    console.error(error);
    catalog.innerHTML = '<p>Unable to load catalog right now. Please try again later.</p>';
  }
}

async function openModal(productId) {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Could not fetch product');

    const products = await response.json();
    const product = products.find(item => String(item.id) === String(productId));
    if (!product) return;

    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.description;

    const message = `Hi, I'm interested in the ${product.name}`;
    waButton.href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
    instagramLink.href = INSTAGRAM_URL;

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } catch (error) {
    console.error(error);
  }
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target.dataset.close === 'true') closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

loadProducts();
