import os
import struct

path = "src/assets/images/sanglogium/sanglogium-01.png"
size = os.path.getsize(path)
print(f"File size: {size}")

with open(path, "rb") as f:
    sig = f.read(8)
    print(f"Signature: {sig.hex()}")

    for i in range(5):
        length_bytes = f.read(4)
        if len(length_bytes) < 4:
            break
        length = struct.unpack(">I", length_bytes)[0]
        type_bytes = f.read(4)
        if len(type_bytes) < 4:
            break
        chunk_type = type_bytes.decode("ascii", errors="replace")
        print(f"Chunk {i}: type={chunk_type}, length={length}")
        if length > 10_000_000:
            print(f"  WARNING: huge chunk length {length}")
            break
        f.seek(length, 1)
        crc = f.read(4)
        if len(crc) < 4:
            break
        if chunk_type == "IEND":
            break
