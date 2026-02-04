export const getImageUrl = (path) => {
	// Public files in `public/` are served at the site root — return the absolute path.
	return `/assets/${path}`;
}