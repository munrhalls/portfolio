from PIL import Image
import os

src = "src/assets/images/sanglogium/sanglogium-01.png"
out = "src/assets/images/sanglogium/sanglogium-01.png.tmp"

try:
    img = Image.open(src)
    print(f"Opened: {src}, size={img.size}, mode={img.mode}")
    img.save(out, optimize=True)
    print(f"Saved to: {out}")
    orig_size = os.path.getsize(src)
    new_size = os.path.getsize(out)
    print(f"Original: {orig_size} bytes, New: {new_size} bytes")
    os.remove(out)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
