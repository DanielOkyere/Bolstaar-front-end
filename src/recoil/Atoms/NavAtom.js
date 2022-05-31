import {atom} from 'recoil'
const NavAtom = atom({
    key: 'nav', // unique ID (with respect to other atoms/selectors)
    default: false , // valeur par défaut (alias valeur initials)
  });

  export default NavAtom