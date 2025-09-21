# Hero Section Color Update - Replace hardcoded colors with global CSS theme variables

## Plan Summary:
Replace hardcoded green colors (green-400, green-500, etc.) with global CSS theme variables for proper theming support.

## Steps to Complete:
- [ ] Replace hardcoded green colors with theme variables in hero-section.tsx
- [ ] Update main headings and primary text to use text-foreground
- [ ] Update accent text and highlights to use text-primary
- [ ] Update buttons and interactive elements to use bg-primary and hover states
- [ ] Update borders and subtle elements to use border-primary/20
- [ ] Test the updated colors in both light and dark modes
- [ ] Verify all interactive elements work properly
- [ ] Check that cybersecurity theme is maintained with proper contrast

## Color Mapping:
- green-400, green-500 → primary (main accent colors)
- green-600 → primary with hover states
- green-500/20, green-500/30 → primary/20, primary/30 (transparency)
- gray-300, gray-500 → muted-foreground, foreground
- black/80, black/30 → card, background with opacity
