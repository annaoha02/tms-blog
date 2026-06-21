export const SITE_TITLE = 'Tokyo Mix Style';
export const SITE_DESCRIPTION =
	'Japanese minimalist fashion meets sustainable secondhand style. Outfit guides and capsule wardrobe ideas mixing UNIQLO, Muji, and vintage finds.';

// Blog category list — single source of truth for nav links and category pages.
// NOTE: if you add or rename a category here, also update the matching
// z.enum(...) list in src/content.config.ts so they stay in sync.
export const CATEGORIES = [
	{ slug: 'uniqlo-styling', label: 'UNIQLO Styling' },
	{ slug: 'muji-minimalist', label: 'Muji & Minimalist' },
	{ slug: 'capsule-wardrobe', label: 'Capsule Wardrobe' },
	{ slug: 'japanese-vintage', label: 'Japanese Vintage' },
	{ slug: 'sustainable-tips', label: 'Sustainable Tips' },
] as const;
