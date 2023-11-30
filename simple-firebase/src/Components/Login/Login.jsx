import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const Login = () => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const handleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log("result console",loggedInUser)
            setUser(loggedInUser)
        })
        .catch(error => console.log(error))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then((result) => {
            console.log(result);
            setUser(null);
        })
        .catch(error => console.log(error))
    }
    const githubProvider = new GithubAuthProvider();
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result)
            setUser(result.user)
        })
        .catch(error => console.log(error))
    }

    const twitterProvider = new TwitterAuthProvider();
    const signInUsingTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then(result => {
            console.log(result)
            setUser(result.user)
        })
        .catch(error => console.log(error))
    }


    return (
        <div style={{marginTop: "1rem"}}>
            { user ? 
            <button onClick={handleSignOut}>Sign out</button> :
            <div>
                <button onClick={handleSignIn}>Sign in with Google</button>
                <button onClick={signInUsingGithub}>Sign in with Github</button>
                <button onClick={signInUsingTwitter}>Sign in with Twitter</button>
            </div>
            }
        { user && <div>
                <h2>Name : {user.displayName}</h2>
                <h3>Email : {user.email}</h3>
            </div> 
        
        }
        </div>
    );
};

export default Login; 