console.log("Start");

const dbPassword = 1234;

const fetchUserProfile = (callback) => {
  setTimeout(() => {
    callback({ id: 2, profile: "@johndoe" });
  }, 3000);
};

const logInUser = (username, password, callback, failureCallback) => {
  setTimeout(() => {
    console.log("Fetching user", username);
    if (password === dbPassword) {
      callback({ account: username });
    } else {
      failureCallback({ message: "Passwords did not match" });
    }
  }, 2000);
};

// const callbackSuccess = (userRecieved) => {
//   console.log("Recieved user", userRecieved);
// };

const loggedInUser = logInUser(
  "john@foo.com",
  1234,
  (userRecieved) => {
    console.log("Recieved user", userRecieved);
    fetchUserProfile((profile) => {
      console.log("Profile recieved", profile);
    });
  },
  (errors) => {
    console.log(errors);
  }
);

console.log("End");
