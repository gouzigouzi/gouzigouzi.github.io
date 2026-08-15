# Personal photo gallery

Place original personal photos in this folder. Use web-friendly `.jpg`, `.jpeg`, `.png`, or `.webp` files when possible. The `web/` subdirectory contains optimized copies used by the site.

To display a photo, add an entry in `_data/gallery.yml` using the optimized filename, alternative text, and an optional short caption. For example:

```yml
- image: /assets/images/gallery/web/my-photo.jpg
  alt: A short, descriptive sentence about the photo
  caption: Optional location or moment
```

The current gallery is styled for portrait photos with a roughly 3:4 ratio. Other ratios are supported and will be neatly cropped in the gallery card.
