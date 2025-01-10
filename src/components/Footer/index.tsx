import { SFooter } from "./styles"
import Insta from "../../assets/insta.png"
import Face from "../../assets/face.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="http://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
    </SFooter>
  )
}