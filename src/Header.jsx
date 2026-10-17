import logo from './assets/logo.png'

export default function Header(){
    return(
        <>
        <header className="header">
            <img src={logo} alt="chef logo" className= "logo" />
            <span className= "claude"> Chef Claude</span>
        </header>
        </>
    )
}