
import os
from pathlib import Path
from PIL import Image

# Configuration
GALLERY_PATH = Path("static/gallery")
THUMB_SIZE = (20, 20)  # Very small size for placeholder

def generate_placeholders():
    if not GALLERY_PATH.exists():
        print(f"Error: {GALLERY_PATH} does not exist")
        return

    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    image_files = [f for f in GALLERY_PATH.iterdir() 
                   if f.suffix.lower() in image_extensions and '_thumb' not in f.name]

    print(f"Found {len(image_files)} images to process...")

    for img_path in image_files:
        try:
            with Image.open(img_path) as img:
                # Convert to RGB if necessary
                if img.mode in ('RGBA', 'LA'):
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[-1])
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')

                # Resize to thumbnail
                img.thumbnail(THUMB_SIZE, Image.Resampling.LANCZOS)
                
                # Construct output path: filename_thumb.webp
                # We assume the gallery data will look for this pattern
                # If original is "Image.png", thumb is "Image_thumb.webp"
                # If original is "Image.webp", thumb is "Image_thumb.webp"
                
                output_filename = f"{img_path.stem}_thumb.webp"
                output_path = GALLERY_PATH / output_filename
                
                img.save(output_path, 'WEBP', quality=60)
                print(f"Generated: {output_filename}")

        except Exception as e:
            print(f"Error processing {img_path.name}: {e}")

if __name__ == "__main__":
    generate_placeholders()
