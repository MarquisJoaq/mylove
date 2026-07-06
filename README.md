# Our Little Universe

A cute scrolling love-story website with a collage and a small heart-collecting mini game.

## How to edit

1. Open this folder in VS Code.
2. Edit the text in `index.html`.
3. Replace the photo placeholders with your own images.
4. Optional: add a music file named `music.mp3` inside the `assets` folder.

## How to add photos

Put your photos inside the `assets` folder.

Example:
- `assets/photo1.jpg`
- `assets/photo2.jpg`
- `assets/photo3.jpg`

Then replace a placeholder like this:

```html
<div class="photo-card photo-placeholder">Photo 1</div>
```

With this:

```html
<img class="photo-card" src="assets/photo1.jpg" alt="Our memory" />
```

## How to make it live with GitHub Pages

1. Create a new GitHub repository.
2. Upload these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/`
3. Go to repository Settings.
4. Go to Pages.
5. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / root
6. Save.
7. Your site will be live at a GitHub Pages URL.
deploy refresh
