import {atom} from 'recoil'
const ModalAtom = atom({
    key: 'modal', // unique ID (with respect to other atoms/selectors)
    default: {}, // valeur par défaut (alias valeur initials)
  });

  export default ModalAtom