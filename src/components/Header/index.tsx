import { Link } from "react-router-dom"
import { SHeader, SNavBar } from "./styles"
import Logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { GrLogout } from "react-icons/gr";
export function Header() {
  const { user, signOut } = useContext(AuthContext)
  async function logout() {
    await signOut()
  }
  return (
    <SHeader>
      <picture>
        <img src={Logo} alt="Logo do site" />
      </picture>
      <SNavBar>
            <Link to="/">Início</Link>
            <Link to="/comentario">Comentário</Link>
        {
          user ? (
            <>
                <Link to="/adm">Administrativa</Link>
                <button onClick={logout}>{user.nome} <GrLogout /></button>
            </>
          ) : (
            <>
                <Link to="/login">Login</Link>
                <Link to="/cadastrar">Cadastrar</Link>
            </>
          )
        }
      </SNavBar>
    </SHeader>
  )
}