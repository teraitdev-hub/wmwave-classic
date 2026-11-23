import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

export const uploadImage = async (file) => {
    if (!file) return null;
    
    // Create a unique filename to prevent overwrites
    const fileExtension = file.name.split('.').pop();
    const uniqueFilename = `blog-images/${uuidv4()}.${fileExtension}`;
    
    const storageRef = ref(storage, uniqueFilename);
    
    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image: ", error);
        throw error;
    }
};
