from PIL import Image
import collections

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        pixels = img.getdata()
        
        # Filter out transparent pixels
        pixels = [p for p in pixels if p[3] > 0]
        
        if not pixels:
            return "No opaque pixels found"
            
        counter = collections.Counter(pixels)
        most_common = counter.most_common(1)[0][0]
        
        return "#{:02x}{:02x}{:02x}".format(most_common[0], most_common[1], most_common[2])
    except Exception as e:
        return str(e)

image_path = r"C:/Users/Elakiya/.gemini/antigravity/brain/54765bfb-7085-436c-8d0e-5a2d771feff9/uploaded_image_1768026402965.png"
print(get_dominant_color(image_path))
