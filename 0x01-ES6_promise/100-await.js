import { uploadPhoto, createUser} from "./utils.js";

export default async function asyncUploadUser() {
  const u = uploadPhoto();
  const c = createUser();

  return Promise.all([u, c]).then((data) => {
    return { photo: data[0], user: data[1]};
}).catch(() => {return { photo: null, user: null};});
}
