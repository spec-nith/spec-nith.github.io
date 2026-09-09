# SPEC NITH website

Static site for Team SPEC (spec-nith.github.io), served via GitHub Pages. Plain HTML/CSS/JS, no build step: what's in the repo is what's deployed.

## Structure

- Each top-level folder (`Gallery/`, `Electrothon/`, `Team Page/`, `Alumini Page/`, `Specfest/`, `Workshop Page/`, `BLOGS/`, ...) is a self-contained page or page group. These paths are the live URLs, so don't rename them.
- `assets/images/`: shared images used by more than one page. Page-specific images (e.g. one-off event photos) stay inside that page's own folder.
- `assets/vendor/`: shared third-party libraries (jQuery, Bootstrap), one canonical copy per version actually in use.
- `scripts/`: maintenance scripts (see below).

## Adding or changing images

Before committing a new or replaced image, compress it:

```bash
./scripts/compress-images.sh path/to/image-or-folder
```

This caps dimensions at 2200px on the longest edge and recompresses JPEG/PNG/WEBP. CI rejects any PR with an image over 800KB or 2200px longest edge, so run the script first to avoid the failure.

Check for exact duplicates before adding a new image (a matching photo may already exist somewhere in the repo):

```bash
./scripts/find-duplicate-images.sh .
```

If the image is shared across multiple pages, put it in `assets/images/<namespace>/` rather than copying it into each page folder.

## Adding a vendor library

Check `assets/vendor/` first: the library or version you need may already be there. Only add a new copy if the required version genuinely isn't present, and don't copy-paste a library into a page folder.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/<page-folder>/`.
