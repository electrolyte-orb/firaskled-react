import { atom } from 'recoil';

interface User {
  displayName: string;
  email: string;
  imageURL: string;
  uid: string;
}

const userAtom = atom<User | null>({
  key: 'userState',
  default: null,
});

export default userAtom;
