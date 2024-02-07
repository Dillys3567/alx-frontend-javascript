import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName);
  const u = uploadPhoto(fileName);  

  return Promise.allSettled((data) => {
    const resps = [];
    data.forEach((val) => {
      resps.push({ status: val.status, value: (val.fulfilled)? val.value : `Error: ${val.reason.message}`});
    return resps;   
});
});
}
