"""
Extract thumbnail frames from gallery videos and save as webp + small thumb.
Runs via ffmpeg – must be on PATH.
"""

import subprocess
import os

VIDEO_DIR = "static/gallery/video"
IMAGE_DIR = "static/gallery/Images"

# Map: video filename (no ext) -> output image basename (no ext)
VIDEO_TO_IMAGE = {
    "Hyperdrive_5s": "Hyperdrive",
    "RainParticles": "RainParticles",
    "SmokeFX": "SmokeFX",
    "SparkFX": "SparkFX",
    "GrassShader": "GrassShader",
    "PixelShader": "PixelShader",
    "WaterShader": "WaterShader",
    "ImportHelper": "ImportHelper",
    "ScreenProfiler": "ScreenProfiler",
    "SplineTool": "SplineTool",
    "TextureToolkit": "TextureToolkit",
    "Boat_Rig": "Boat_Rig",
    "Car_rig": "Car_rig",
}

os.makedirs(IMAGE_DIR, exist_ok=True)

for video_stem, image_stem in VIDEO_TO_IMAGE.items():
    # Find the actual video file (could be .mp4, .gif…)
    src = None
    for ext in [".mp4", ".gif", ".webm"]:
        candidate = os.path.join(VIDEO_DIR, video_stem + ext)
        if os.path.exists(candidate):
            src = candidate
            break

    if src is None:
        print(f"  SKIP  {video_stem} – video not found")
        continue

    # --- 1. Full-size webp thumbnail ---
    out_webp = os.path.join(IMAGE_DIR, image_stem + ".webp")
    if not os.path.exists(out_webp):
        cmd = [
            "ffmpeg", "-y",
            "-ss", "1",           # seek to 1 second
            "-i", src,
            "-vframes", "1",
            "-vf", "scale=1280:-2",
            "-q:v", "80",
            out_webp
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"  OK    {out_webp}")
        else:
            print(f"  FAIL  {out_webp}\n{result.stderr[-300:]}")
    else:
        print(f"  EXISTS {out_webp}")

    # --- 2. Small blurred placeholder thumb (40px wide) ---
    out_thumb = os.path.join(IMAGE_DIR, image_stem + "_thumb.webp")
    if not os.path.exists(out_thumb):
        cmd = [
            "ffmpeg", "-y",
            "-ss", "1",
            "-i", src,
            "-vframes", "1",
            "-vf", "scale=40:-2,boxblur=4:2",
            "-q:v", "50",
            out_thumb
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"  OK    {out_thumb}")
        else:
            print(f"  FAIL  {out_thumb}\n{result.stderr[-300:]}")
    else:
        print(f"  EXISTS {out_thumb}")

print("\nDone.")
