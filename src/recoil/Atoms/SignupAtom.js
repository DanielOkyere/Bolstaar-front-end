import {atom} from 'recoil'
const SignupAtom = atom({
    key: 'Signup', // unique ID (with respect to other atoms/selectors)
    default: {} , // valeur par défaut (alias valeur initials)
  });

  export default SignupAtom