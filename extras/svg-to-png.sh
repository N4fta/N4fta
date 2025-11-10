#!/bin/bash

# Create icons directory if it doesn't exist
mkdir -p public/assets/icons

# Define color (your purple #774A9F)
COLOR="774A9F"

# List of icons to generate with their Simple Icons names
SIMPLE_ICONS=("github" "discord" "spotify" "location")
LOCAL_ICONS=("mail" "globe")

# Generate icons from Simple Icons
for icon in "${SIMPLE_ICONS[@]}"; do
  echo "Downloading $icon from Simple Icons..."
  curl -o "temp.svg" "https://cdn.simpleicons.org/$icon/$COLOR"
  
  # Convert to PNG using Inkscape
  inkscape "temp.svg" \
    --export-filename="public/assets/icons/$icon.png" \
    --export-width=32 \
    --export-height=32
    
  rm temp.svg
done

# Process local SVG files
for icon in "${LOCAL_ICONS[@]}"; do
  echo "Processing local $icon.svg..."
  if [ -f "$icon.svg" ]; then
    inkscape "$icon.svg" \
      --export-filename="public/assets/icons/$icon.png" \
      --export-width=32 \
      --export-height=32
  else
    echo "Warning: $icon.svg not found!"
  fi
done
  
  # Convert to PNG using Inkscape (best quality)
  inkscape "temp.svg" \
    --export-filename="public/assets/icons/$icon.png" \
    --export-width=32 \
    --export-height=32
    
  # Clean up
  rm temp.svg
done