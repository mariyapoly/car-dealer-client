import initializeAuthentication from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";


initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false)

    const auth = getAuth();

    // register user with email password
    const rigisterUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                // saved user
                savedUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // signIn user with email paaword
    const signInEmailPassword = (email, password, location, history) => {
        setIsLoading(true)
        const destination = location?.state?.from || '/';
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // observed user state change
    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])

    // cheack admin
    useEffect(() => {

        // setIsLoading(true)

        axios.get(`https://cryptic-dawn-61240.herokuapp.com/makeAdmin/${user?.email}`)
            .then(function (response) {
                if (response?.data?.role === 'admin') {
                    setIsAdmin(true)
                    // setIsLoading(false)
                }
                else {
                    setIsAdmin(false)
                    // setIsLoading(false)
                }
            })

    }, [user.email])


    // logout user
    const logOut = () => {
        return signOut(auth)
    }

    // saved user 
    const savedUser = (email, name) => {
        axios.post('https://cryptic-dawn-61240.herokuapp.com/user', {
            displayName: name,
            email: email
        })
            .then(function (response) {
            })
            .catch(function (error) {
            });
    }

    return {
        rigisterUser,
        signInEmailPassword,
        user,
        error,
        isLoading,
        isAdmin,
        setIsLoading,
        setUser,
        logOut
    }

}

export default useFirebase;