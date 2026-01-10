from PIL import Image
from collections import Counter
import sys

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

try:
    image_path = sys.argv[1]
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    # Resize to speed up if large
    img.thumbnail((200, 200))
    
    colors = []
    width, height = img.size
    for x in range(width):
        for y in range(height):
            r, g, b, a = img.getpixel((x, y))
            if a > 128:  # Ignore mostly transparent pixels
                colors.append((r, g, b))
    
    if not colors:
        print("No opaque colors found.")
    else:
        most_common = Counter(colors).most_common(50)
        print("Top Colors:")
        for color, count in most_common:
            hex_val = rgb_to_hex(color)
            print(f"{hex_val}: {count}")

except Exception as e:
    print(f"Error: {e}")
