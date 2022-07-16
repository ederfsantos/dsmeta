import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/ederfsantos">@ederfsantos na Semana Spring React da DevSuperior professor Nelio Alves edição julho 2022</a>
                    
                    
                </p>
            </div>
        </header>

    )

}
export default Header;