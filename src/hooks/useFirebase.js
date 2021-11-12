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
        axios.get(`http://localhost:5000/makeAdmin/${user?.email}`)
            .then(function (response) {
                if (response?.data?.role === 'admin') {
                    setIsAdmin(true)
                    // setIsLoading(false)
                }
                else {
                    setIsAdmin(false)
                }
            })

        // fetch(`http://localhost:5000/makeAdmin/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data?.role === 'admin') {
        //             setIsAdmin(true)
        //         }
        //     })
    }, [user.email])


    // logout user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    // saved user 
    const savedUser = (email, name) => {
        axios.post('http://localhost:5000/user', {
            displayName: name,
            email: email
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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
        logOut
    }

}

export default useFirebase;