#!/usr/bin/env python3
"""
Optimize organization logos by converting to WebP format
This will reduce file sizes significantly while maintaining quality
"""

from PIL import Image
import os
from pathlib import Path

# Configuration
ORGS_PATH = Path("static/orgs")
OUTPUT_PATH = Path("static/orgs")
WEBP_QUALITY = 90  # 90% quality - higher quality for logos

def optimize_logos():
    """Convert all logo images to WebP format"""
    
    if not ORGS_PATH.exists():
        print(f"Error: {ORGS_PATH} does not exist")
        return
    
    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png'}
    image_files = [f for f in ORGS_PATH.iterdir() 
                   if f.suffix.lower() in image_extensions]
    
    print(f"Found {len(image_files)} logos to optimize\n")
    
    total_original_size = 0
    total_optimized_size = 0
    
    for img_path in image_files:
        try:
            # Get original size
            original_size = img_path.stat().st_size
            total_original_size += original_size
            
            # Open and convert image
            with Image.open(img_path) as img:
                # Preserve transparency for logos
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Keep transparency
                    output_file = OUTPUT_PATH / f"{img_path.stem}.webp"
                    img.save(output_file, 'WEBP', quality=WEBP_QUALITY, method=6, lossless=False)
                else:
                    # Convert to RGB for non-transparent images
                    if img.mode != 'RGB':
                        img = img.convert('RGB')
                    output_file = OUTPUT_PATH / f"{img_path.stem}.webp"
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
    if total_original_size > 0:
        total_savings = ((total_original_size - total_optimized_size) / total_original_size) * 100
        print("=" * 50)
        print(f"Total original size: {total_original_size / 1024:.2f} KB")
        print(f"Total optimized size: {total_optimized_size / 1024:.2f} KB")
        print(f"Total saved: {total_savings:.1f}%")
        print("=" * 50)
        
        print("\nNote: Original files are kept. To use WebP files, update your assets.ts file.")
        print("You can delete the original PNG files after verifying the WebP versions look good.")

if __name__ == "__main__":
    print("Organization Logo Optimizer")
    print("=" * 50)
    optimize_logos()
