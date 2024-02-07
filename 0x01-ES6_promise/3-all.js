import { uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup() {
  const resps = [];
  const u = uploadPhoto();
  const c = createUser();

  return Promise.all([u, c]).then((data) => {
    resps.push(data[0].body);
    resps.push(data[1].firstName);
    resps.push(data[1].lastName);
    console.log(reps.join(' '));
  }).catch(() => {
    console.log('Signup system offline');
    });
}
