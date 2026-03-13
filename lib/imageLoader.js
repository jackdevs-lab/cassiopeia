/**
 * Handles image path resolution for the Cassiopeia project.
 * It ensures that old Cloudinary assets still load while local SVGs and new uploads are handled correctly.
 */
export const getImageSrc = (src) => {
    if (!src) return "";

    // 1. If it's already a full URL (Firebase, external Cloudinary, etc.), return as is.
    if (src.startsWith("http")) {
        return src;
    }

    // 2. If it's a local SVG icon, return as is (Next.js will find it in /public).
    if (src.startsWith("/svgs/")) {
        return src;
    }

    // 3. If it starts with a slash but looks like an old Cloudinary ID (e.g., /618e3...), 
    // prepend the original Cloudinary base URL.
    const CLOUDINARY_BASE = "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto";

    if (src.startsWith("/")) {
        // If it looks like a local asset that isn't an SVG, it's likely a Cloudinary asset
        return `${CLOUDINARY_BASE}${src}`;
    }

    return `${CLOUDINARY_BASE}/${src}`;
};
