import { storage } from "../firebase_copy";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Uploads an image to Firebase Storage and returns the download URL.
 * @param {File} file - The image file to upload.
 * @param {string} folder - The folder in storage (e.g., 'flowers', 'banners').
 * @returns {Promise<string>} - The public download URL of the uploaded image.
 */
export const uploadProductImage = async (file, folder = "flowers") => {
    if (!file) return null;

    try {
        // 1. Create a storage reference
        const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);

        // 2. Upload the file
        const snapshot = await uploadBytes(storageRef, file);

        // 3. Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};
