import {atom} from 'recoil'
const ForfeitAtom = atom({
    key: 'forfeit', // unique ID (with respect to other atoms/selectors)
    default: false , // valeur par défaut (alias valeur initials)
  });

  export default ForfeitAtom