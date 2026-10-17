import logo from './assets/logo.png'

export default function Header(){
    return(
        <>
        <header className="header">
            <img src={logo} alt="chef logo"  />
            <span> Chef </span>
        </header>
        </>
    )
}