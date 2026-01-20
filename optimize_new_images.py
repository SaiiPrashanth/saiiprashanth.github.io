
import os
from pathlib import Path
from PIL import Image

# Configuration
GALLERY_PATH = Path("static/gallery")
WEBP_QUALITY = 85

def optimize_new_images():
    images_to_process = [
        "Cubeology.png",
        "Decipher.png",
        "EterNights.png",
        "Procedural Terrain.png",
        "SpaceOdyssey.png"
    ]

    for img_name in images_to_process:
        img_path = GALLERY_PATH / img_name
        if not img_path.exists():
            print(f"File not found: {img_name}")
            continue

        try:
            with Image.open(img_path) as img:
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                output_filename = f"{img_path.stem}.webp"
                output_path = GALLERY_PATH / output_filename
                
                img.save(output_path, 'WEBP', quality=WEBP_QUALITY, method=6)
                print(f"Converted {img_name} to {output_filename}")
                
        except Exception as e:
            print(f"Error processing {img_name}: {e}")

if __name__ == "__main__":
    optimize_new_images()
