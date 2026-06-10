try:
    from PIL import Image
    print("PILLOW_FOUND")
except Exception as e:
    print("PILLOW_NOT_FOUND")
    print(str(e))
