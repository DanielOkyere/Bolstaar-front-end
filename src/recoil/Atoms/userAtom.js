import {atom} from 'recoil'
const UserAtom = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: {} , // valeur par défaut (alias valeur initials)
  });

  export default UserAtom