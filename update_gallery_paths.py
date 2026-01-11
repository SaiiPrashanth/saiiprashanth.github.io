#!/usr/bin/env python3
"""
Update gallery.ts to use WebP images instead of PNG/JPG
"""

import re

# Read the file
with open('src/lib/data/gallery.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all image paths with .webp
# Pattern: '/gallery/filename.png' or '/gallery/filename.jpg'
content = re.sub(r"'/gallery/([^']+)\.(png|jpg)'", r"'/gallery/\1.webp'", content)
content = re.sub(r'"/gallery/([^"]+)\.(png|jpg)"', r'"/gallery/\1.webp"', content)

# Write back
with open('src/lib/data/gallery.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Updated gallery.ts to use WebP images")
print("  All .png and .jpg references changed to .webp")
