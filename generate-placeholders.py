from PIL import Image, ImageDraw, ImageFont
import os

output_dir = "src/assets/images/sanglogium"
labels = [
    ("sanglogium-01.png", "Hero", "#2d3748"),
    ("sanglogium-02.png", "Overview", "#1a202c"),
    ("sanglogium-03.png", "Storefront", "#2c5282"),
    ("sanglogium-04.png", "Search", "#285e61"),
    ("sanglogium-05.png", "Cart", "#276749"),
    ("sanglogium-06.png", "Checkout", "#744210"),
    ("sanglogium-07.png", "Payment", "#702459"),
    ("sanglogium-08.png", "Shipping", "#44337a"),
    ("sanglogium-09.png", "Returns", "#742a2a"),
    ("sanglogium-10.png", "Admin", "#2d3748"),
    ("sanglogium-11.png", "Marketing", "#1a365d"),
    ("sanglogium-12.png", "Testing", "#22543d"),
]

width, height = 800, 600

for filename, label, color in labels:
    img = Image.new("RGB", (width, height), color)
    draw = ImageDraw.Draw(img)

    # Try to use a default font, fallback to built-in
    try:
        font = ImageFont.truetype("arial.ttf", 48)
    except Exception:
        font = ImageFont.load_default()

    text = f"[Placeholder]\n{label}"
    bbox = draw.multiline_textbbox((0, 0), text, font=font, align="center")
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (width - text_w) // 2
    y = (height - text_h) // 2

    draw.multiline_text((x, y), text, fill="white", font=font, align="center")

    out_path = os.path.join(output_dir, filename)
    img.save(out_path, "PNG")
    print(f"Created {out_path}")

print("Done")
