import {atom} from 'recoil'
const RefreshTableAtom = atom({
    key: 'refresh', // unique ID (with respect to other atoms/selectors)
    default: false , // valeur par défaut (alias valeur initials)
  });

  export default RefreshTableAtom