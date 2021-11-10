import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // register user with email password
    const rigisterUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setUser(newUser)

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // signIn user with email paaword
    const signInEmailPassword = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // observed user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth])

    // logout user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }


    return {
        rigisterUser,
        signInEmailPassword,
        user,
        error,
        isLoading,
        logOut
    }

}

export default useFirebase;