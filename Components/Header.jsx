import face from "../Images/image.png"

export default function Header(){
    return(
        <header className="header">
            <img src={face} alt=""  />
            <h1>Meme Generator</h1>
        </header>
    )
}