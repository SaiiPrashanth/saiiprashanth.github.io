#!/usr/bin/env python3
"""
Optimize gallery images by converting to WebP format
This will reduce file sizes significantly while maintaining quality
"""

from PIL import Image
import os
from pathlib import Path

# Configuration
GALLERY_PATH = Path("static/gallery")
OUTPUT_PATH = Path("static/gallery")
WEBP_QUALITY = 85  # 85% quality - good balance between size and quality

def optimize_images():
    """Convert all images to WebP format"""
    
    if not GALLERY_PATH.exists():
        print(f"Error: {GALLERY_PATH} does not exist")
        return
    
    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png'}
    image_files = [f for f in GALLERY_PATH.iterdir() 
                   if f.suffix.lower() in image_extensions]
    
    print(f"Found {len(image_files)} images to optimize\n")
    
    total_original_size = 0
    total_optimized_size = 0
    
    for img_path in image_files:
        try:
            # Get original size
            original_size = img_path.stat().st_size
            total_original_size += original_size
            
            # Open and convert image
            with Image.open(img_path) as img:
                # Convert RGBA to RGB if necessary
                if img.mode == 'RGBA':
                    # Create a white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[3])  # 3 is the alpha channel
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Create output filename
                output_file = OUTPUT_PATH / f"{img_path.stem}.webp"
                
                # Save as WebP
                img.save(output_file, 'WEBP', quality=WEBP_QUALITY, method=6)
                
                # Get new size
                new_size = output_file.stat().st_size
                total_optimized_size += new_size
                
                # Calculate savings
                savings = ((original_size - new_size) / original_size) * 100
                
                print(f"✓ {img_path.name}")
                print(f"  Original: {original_size / 1024:.2f} KB")
                print(f"  WebP: {new_size / 1024:.2f} KB")
                print(f"  Saved: {savings:.1f}%\n")
                
        except Exception as e:
            print(f"✗ Error processing {img_path.name}: {e}\n")
    
    # Print summary
    total_savings = ((total_original_size - total_optimized_size) / total_original_size) * 100
    print("=" * 50)
    print(f"Total original size: {total_original_size / (1024 * 1024):.2f} MB")
    print(f"Total optimized size: {total_optimized_size / (1024 * 1024):.2f} MB")
    print(f"Total saved: {total_savings:.1f}%")
    print("=" * 50)
    
    print("\nNote: Original files are kept. To use WebP files, update your gallery data.")
    print("You can delete the original files after verifying the WebP versions look good.")

if __name__ == "__main__":
    print("Gallery Image Optimizer")
    print("=" * 50)
    optimize_images()
