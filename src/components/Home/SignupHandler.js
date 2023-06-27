export async function signupHandler(name, setLsWait, createUserWithEmailAndPassword, auth, email, pass, setLogin, setValidName, setValidPass, setValidEmail, setPassError, setEmailError) {
  try {
    if (name) {
      setLsWait(true);
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      localStorage.setItem("login", "true");
      localStorage.setItem("id", user.user.uid);
      const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
      const response = await fetch(fetchUrl + localStorage.getItem("id") + '/name.json', {
        method: 'POST',
        body: JSON.stringify({ name: name })
      })
      setLogin(true);
    }
    else { setValidName(false); }
  }
  catch (error) {
    setLsWait(false);
    if (error.code === "auth/weak-password") {
      setValidPass(false); setPassError("Password too weak.");
    }
    else if (error.code === "auth/internal-error") {
      setValidPass(false); setPassError("This field is required.");
    }
    else if (error.code === "auth/email-already-in-use") {
      setValidEmail(false); setEmailError("This email is taken. Try another.");
    }
    else if (error.code === "auth/invalid-email") {
      setValidEmail(false); setEmailError("Invalid Email Address.");
    }
    else if (error.code === "auth/missing-email") {
      setValidEmail(false); setEmailError("This field is required.");
    }
    else if (error.code === "auth/admin-restricted-operation") {
      setValidEmail(false); setValidPass(false);
      setEmailError("This field is required.");
      setPassError("This field is required.");
    }
    else alert("Something went wrong. Please try again.")
    setLogin(false);
  }
}