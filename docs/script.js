const WA_PHONE = '15551234567';
const INSTAGRAM_URL = 'https://instagram.com/your_handle';

const productData = [
  { id: 1, name: 'Handwoven Cotton Keychain', description: 'Soft handwoven cotton keychain crafted with delicate detailing and a polished finish.', image: 'images/product_01.jpeg' },
  { id: 2, name: 'Floral Crochet Accent', description: 'A vibrant crochet accent made with texture, color, and artisanal care.', image: 'images/product_02.jpeg' },
  { id: 3, name: 'Custom Gift Bag', description: 'A handmade gift bag with elegant stitches and a personal finishing touch.', image: 'images/product_03.jpeg' },
  { id: 4, name: 'Threaded Wall Art', description: 'Decorative wall art created with colorful threadwork and hand-finished detail.', image: 'images/product_04.jpeg' },
  { id: 5, name: 'Handmade Crochet Detail', description: 'A handcrafted crochet detail designed for a cozy and unique statement look.', image: 'images/product_05.jpeg' },
  { id: 6, name: 'Classic Handwoven Piece', description: 'Traditional handcraft detailing paired with a clean modern finish.', image: 'images/product_06.jpeg' },
  { id: 7, name: 'Soft Yarn Creation', description: 'A soft yarn creation with texture, warmth, and careful craftsmanship.', image: 'images/product_07.jpeg' },
  { id: 8, name: 'Decorative Cushion', description: 'A decorative cushion cover handcrafted to add charm and comfort to any space.', image: 'images/product_08.jpeg' },
  { id: 9, name: 'Artisan Decor Piece', description: 'A handcrafted decor piece that blends soft color tones with artisanal style.', image: 'images/product_09.jpeg' },
  { id: 10, name: 'Handmade Style Basket', description: 'A neatly finished basket-style handcraft item designed for everyday use.', image: 'images/product_10.jpeg' },
  { id: 11, name: 'Crochet Home Accent', description: 'Bright crochet home decor with tailored detailing and handmade character.', image: 'images/product_11.jpeg' },
  { id: 12, name: 'Statement Accessory', description: 'A statement accessory designed to stand out with thoughtful finishing details.', image: 'images/product_12.jpeg' },
  { id: 13, name: 'Colorful Handmade Detail', description: 'Vivid artisan detail made with texture, warmth, and careful craftsmanship.', image: 'images/product_13.jpeg' },
  { id: 14, name: 'Blooming Crochet Set', description: 'A blooming crochet set with soft shades and a cheerful handmade look.', image: 'images/product_14.jpeg' },
  { id: 15, name: 'Pink Handmade Mini Bag', description: 'A pink handcrafted mini bag with rich detail and a refined finish.', image: 'images/product_15.jpeg' },
  { id: 16, name: 'Elegant Handcrafted Set', description: 'An elegant handcrafted set created with intricate stitches and premium feel.', image: 'images/product_16.jpeg' },
  { id: 17, name: 'Artisan Flower Tote', description: 'A spacious artisan flower tote designed for everyday beauty and function.', image: 'images/product_17.jpeg' },
  { id: 18, name: 'Custom Crochet Accent', description: 'A custom crochet accent made with attention to symmetry and texture.', image: 'images/product_18.jpeg' },
  { id: 19, name: 'Handmade Home Decor', description: 'Handmade home decor item with a warm and personal artisan finish.', image: 'images/product_19.jpeg' },
  { id: 20, name: 'Modern Crochet Accessory', description: 'A modern crochet accessory blending softness, color, and creative detail.', image: 'images/product_20.jpeg' },
  { id: 21, name: 'Soft Pink Keyring', description: 'A soft pink keyring designed to be both practical and decorative.', image: 'images/product_21.jpeg' },
  { id: 22, name: 'Signature Crochet Piece', description: 'A signature crochet piece with striking texture and a premium handmade finish.', image: 'images/product_22.jpeg' },
  { id: 23, name: 'Decorative Handmade Accent', description: 'An artisan accent designed to add softness, elegance, and detail to a space.', image: 'images/product_23.jpeg' },
  { id: 24, name: 'Featured Handcraft Photo', description: 'A featured handmade catalog image from the latest artisan collection.', image: 'images/product_24.jpeg' },
  { id: 25, name: 'Crochet Flower Set', description: 'A crochet flower set crafted with delicacy, color, and expressive texture.', image: 'images/product_25.jpeg' },
  { id: 26, name: 'Pink Handmade Bundle', description: 'A pink handmade bundle designed to feel personal, warm, and timeless.', image: 'images/product_26.jpeg' },
  { id: 27, name: 'Artisan Keychain Pair', description: 'An artisan keychain pair with a polished handmade finish and delicate charm.', image: 'images/product_27.jpeg' },
  { id: 28, name: 'Gifted Handmade Craft', description: 'A gifted handmade craft item created for meaningful, personal keepsakes.', image: 'images/product_28.jpeg' },
  { id: 29, name: 'Handcrafted Pink Piece', description: 'A handcrafted pink piece with warm tones and a soft, elegant aesthetic.', image: 'images/product_29.jpeg' },
  { id: 30, name: 'Custom Crochet Detail', description: 'A custom crochet detail made with care, craftsmanship, and close attention to finish.', image: 'images/product_30.jpeg' },
  { id: 31, name: 'Heirloom Handmade Keepsake', description: 'An heirloom-inspired handmade keepsake made to be cherished and displayed.', image: 'images/product_31.jpeg' },
];

const catalog = document.getElementById('catalog');
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const waButton = document.getElementById('wa-button');
const instagramLink = document.getElementById('instagram-link');
const closeButton = document.getElementById('modal-close');

function renderCatalog() {
  catalog.innerHTML = productData.map(product => `
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
    button.addEventListener('click', () => openModal(Number(button.dataset.id)));
  });
}

function openModal(productId) {
  const product = productData.find(item => item.id === productId);
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

renderCatalog();
