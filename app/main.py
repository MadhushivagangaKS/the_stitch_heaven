from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.base import BaseHTTPMiddleware

app = FastAPI(title="The Stitch Heaven", version="1.0.0")


class NoCacheMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        return response


app.add_middleware(NoCacheMiddleware)
app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

PHOTO_DIR = Path("app/static/Photos")
product_names = [
    "Handwoven Cotton Hair Bow",
    "Floral Key Chain",
    "Custom Woolen Sweater",
    "Threaded Devils Eye Keychain",
    "Handmade Crochet Ribbon",
    "Classic Handwoven Piece",
    "Soft Yarn Creation",
    "Decorative Cushion",
    "Artisan Decor Piece",
    "Handmade Style",
    "Crochet Home Accent",
    "Statement Accessory",
    "Colorful Handmade Detail",
    "Blooming Crochet Set",
    "Pink Handmade Mini Crochet",
    "Elegant Handcrafted Set",
    "Artisan Flower Tote",
    "Custom Crochet Accent",
    "Handmade Home Decor",
    "Modern Crochet Accessory",
    "Soft Pink Bouquet",
    "Signature Crochet Piece",
    "Decorative Handmade Accent",
    "Featured Handcraft Baby Wear",
    "Crochet Baby Wear Set",
    "Pink Handmade Bundle",
    "Artisan Pair",
    "Gifted Handmade Craft",
    "Handcrafted Piece",
    "Custom Crochet Detail",
    "Heirloom Handmade Keepsake",
]

product_descriptions = [
    "Soft handwoven cotton hair bow crafted with delicate detailing and a polished finish.",
    "A vibrant floral key chain made with texture, color, and artisanal care.",
    "A handmade woolen sweater with elegant stitches and a personal finishing touch.",
    "Decorative keychain created with colorful threadwork and hand-finished detail.",
    "A handcrafted crochet ribbon designed for a cozy and unique statement look.",
    "Traditional handcraft hear ring detailing paired with a clean modern finish.",
    "A soft yarn creation with texture, warmth, and careful craftsmanship.",
    "A decorative cushion cover handcrafted to add charm and comfort to any space.",
    "A handcrafted decor piece that blends soft color tones with artisanal style.",
    "A neatly finished style handcraft item designed for everyday use.",
    "Bright crochet home decor with tailored detailing and handmade character.",
    "A statement accessory designed to stand out with thoughtful finishing details.",
    "Vivid artisan detail made with texture, warmth, and careful craftsmanship.",
    "A blooming crochet set with soft shades and a cheerful handmade look.",
    "A pink handcrafted mini crochet with rich detail and a refined finish.",
    "An elegant handcrafted set created with intricate stitches and premium feel.",
    "A spacious artisan flower tote designed for everyday beauty and function.",
    "A custom crochet accent made with attention to symmetry and texture.",
    "Handmade home decor item with a warm and personal artisan finish.",
    "A modern crochet accessory blending softness, color, and creative detail.",
    "A soft pink bouquet designed to be both practical and decorative.",
    "A signature crochet piece with striking texture and a premium handmade finish.",
    "An artisan accent designed to add softness, elegance, and detail to a space.",
    "A featured handmade baby wear item from the latest artisan collection.",
    "A crochet Baby Wear set crafted with delicacy, color, and expressive texture.",
    "A pink handmade bundle designed to feel personal, warm, and timeless.",
    "An artisan keychain pair with a polished handmade finish and delicate charm.",
    "A gifted handmade craft item created for meaningful, personal keepsakes.",
    "A handcrafted piece with warm tones and a soft, elegant aesthetic.",
    "A custom crochet detail made with care, craftsmanship, and close attention to finish.",
    "An heirloom-inspired handmade keepsake made to be cherished and displayed.",
]


def build_products():
    photo_files = sorted(PHOTO_DIR.glob("*.jpeg"), key=lambda p: p.name.lower())
    products = []
    for index, photo in enumerate(photo_files, start=1):
        name = product_names[(index - 1) % len(product_names)]
        description = product_descriptions[(index - 1) % len(product_descriptions)]
        products.append(
            {
                "id": index,
                "name": name,
                "description": description,
                "image": f"/static/Photos/{photo.name}",
            }
        )
    return products


PRODUCTS = build_products()


@app.get("/health")
def healthcheck():
    return {"status": "ok"}


@app.get("/api/products")
def get_products():
    return PRODUCTS


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
