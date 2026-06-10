import os
import hashlib

dir_path = "src/assets/images/sanglogium"
files = [f for f in os.listdir(dir_path) if f.endswith(".png")]
hashes = {}
for f in sorted(files):
    path = os.path.join(dir_path, f)
    with open(path, "rb") as fh:
        h = hashlib.md5(fh.read()).hexdigest()
    hashes[f] = h
    print(f"{f}: {h}")

unique = set(hashes.values())
print(f"\nTotal files: {len(files)}")
print(f"Unique hashes: {len(unique)}")
if len(unique) == 1:
    print("ALL FILES ARE IDENTICAL")
else:
    print("Files are different")
