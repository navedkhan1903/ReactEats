export async function loginHandler(setLsWait, signInWithEmailAndPassword, auth, email, pass, setLogin, setValidEmail, setValidPass, setEmailError, setPassError) {
  try {
    setLsWait(true);
    const user = await signInWithEmailAndPassword(auth, email, pass);
    localStorage.setItem("id", user.user.uid);
    localStorage.setItem("login", "true");
    setLogin(true);
  }
  catch (error) {
    setLsWait(false);
    if (error.code === "auth/user-not-found") {
      setValidEmail(false); setEmailError("No user found with this email address.");
    }
    else if (error.code === "auth/invalid-email") {
      setValidEmail(false); setEmailError("This email is invalid.");
    }
    else if (error.code === "auth/missing-email") {
      setValidEmail(false); setEmailError("Missing Email Address.");
    }
    else if (error.code === "auth/wrong-password") {
      setValidPass(false); setPassError("Wrong Password");
    }
    else alert("Something went wrong. Please try again.");
    setLogin(false);
  }
}