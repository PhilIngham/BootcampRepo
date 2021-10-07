// Promises:

// Pending
// Resolve
// Reject

console.log("Start");

const dbPassword = 9999;

const fetchUserProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 2, profile: "@johndoe" });
    }, 3000);
  });
};

const logInUser = (username, password, callback, failureCallback) => {
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

logInUser("donaldtrump", 1234)
  .then((userDetails) => {
    console.log("Received user details", userDetails);

    return fetchUserProfile();
  })
  .then((profile) => {
    console.log("Revieved user profile", profile);
  })
  .catch((err) => console.error("Failed: ", err));
// const loggedInUser = logInUser(
//   "john@foo.com",
//   1234,
//   (userRecieved) => {
//     console.log("Recieved user", userRecieved);
//     fetchUserProfile((profile) => {
//       console.log("Profile recieved", profile);
//     });
//   },
//   (errors) => {
//     console.log(errors);
//   }
// );

console.log("End");
