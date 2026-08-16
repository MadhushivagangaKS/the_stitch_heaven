from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(title="The Stitch Heaven", version="1.0.0")

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

PRODUCTS = [
    {
        "id": 1,
        "name": "Handwoven Cotton Scarf",
        "description": "Soft handwoven scarf in a breathable cotton blend.",
        "image": "/static/Photos/IMG20250525165020.jpg.jpeg",
    },
    {
        "id": 2,
        "name": "Floral Handcrafted Tote",
        "description": "A stylish tote with delicate floral detailing.",
        "image": "/static/Photos/IMG20260621183826.jpg.jpeg",
    },
    {
        "id": 3,
        "name": "Embroidered Gift Bag",
        "description": "Handmade gift bag with intricate stitching and charm.",
        "image": "/static/Photos/IMG20260712133228.jpg.jpeg",
    },
    {
        "id": 4,
        "name": "Threaded Wall Accent",
        "description": "Decorative wall piece created with colorful hand stitching.",
        "image": "/static/Photos/IMG20260712141038.jpg.jpeg",
    },
    {
        "id": 5,
        "name": "Handmade Crochet Accent",
        "description": "Textured handcrafted crochet piece for cozy styling.",
        "image": "/static/Photos/IMG20260712141041.jpg.jpeg",
    },
    {
        "id": 6,
        "name": "Classic Handwoven Piece",
        "description": "Traditional handcraft detail with a modern woven finish.",
        "image": "/static/Photos/IMG_9915.JPG.jpeg",
    },
    {
        "id": 7,
        "name": "Soft Yarn Creation",
        "description": "A textured handmade product crafted with careful finishing.",
        "image": "/static/Photos/IMG_9916.JPG.jpeg",
    },
    {
        "id": 8,
        "name": "Decorative Handmade Cushion",
        "description": "Comfortable and colorful handmade cushion cover.",
        "image": "/static/Photos/IMG_9917.JPG.jpeg",
    },
    {
        "id": 9,
        "name": "Artisan Decor Piece",
        "description": "A handcrafted art object with soft colors and detail.",
        "image": "/static/Photos/IMG_9918.JPG.jpeg",
    },
    {
        "id": 10,
        "name": "Handmade Style Basket",
        "description": "A neatly finished basket-style handcraft piece.",
        "image": "/static/Photos/IMG_9919.JPG.jpeg",
    },
    {
        "id": 11,
        "name": "Crochet Home Accent",
        "description": "Bright crochet home decor with a tailored handmade touch.",
        "image": "/static/Photos/IMG_9920.JPG.jpeg",
    },
    {
        "id": 12,
        "name": "Handcrafted Statement Accessory",
        "description": "A small statement item from the craft collection.",
        "image": "/static/Photos/IMG_9921.JPG.jpeg",
    },
    {
        "id": 13,
        "name": "Colorful Handmade Detail",
        "description": "Vivid artisan detail made with care and texture.",
        "image": "/static/Photos/IMG_9922.JPG.jpeg",
    },
    {
        "id": 14,
        "name": "Featured Handcraft Photo",
        "description": "A featured handmade catalog image from the latest collection.",
        "image": "/static/Photos/Image.jpg.jpeg",
    },
]


@app.get("/health")
def healthcheck():
    return {"status": "ok"}


@app.get("/api/products")
def get_products():
    return PRODUCTS


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
