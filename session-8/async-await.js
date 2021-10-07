// async/await:

console.log("Start");

const dbPassword = 1234;

const fetchUserProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 2, profile: "@johndoe" });
    }, 3000);
  });
};

const logInUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user", username);
      if (password === dbPassword) {
        resolve({ account: username });
      } else {
        reject({ message: "Passwords did not match" });
      }
    }, 2000);
  });
};

const retrieveUserDetails = async () => {
  // call to retrieve user details
  try {
    const loggedInUser = await logInUser("waduihwdauihadw", 2000);
    console.log("Recieved user: ", loggedInUser);
    const profileForUser = await fetchUserProfile();
    console.log("Recieved profile: ", profileForUser);
  } catch (err) {
    console.error(err);
  }
};

retrieveUserDetails();

console.log("End");
