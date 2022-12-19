import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from './global';

const db = getFirestore(app);

const addContact = async ({name, email, message}) => {
        const id = +new Date()
        try {
                await addDoc(collection(db, 'contacts'), {
                        id,
                        name,
                        email, 
                        message
                });
                return {
                        success: true,
                };
        }catch(error){
                console.error('Error writing new message to Firebase Database', error);
        }
        
}

export { addContact };