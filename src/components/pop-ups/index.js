import ReactDom from 'react-dom'

export default function PopUps ({ children }) {
  return ReactDom.createPortal(
    children,
    document.getElementById('portal')
  )
}
