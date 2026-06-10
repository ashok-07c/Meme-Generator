import React from "react"

export default function Main() {
    const [meme , setMeme] = React.useState({
        topText : "One does not simply",
        bottomText : "Walk into Mordor",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes , setAllMemes] = React.useState([])

    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    } , [])

    function getMeme(){
        const randNum = Math.floor(Math.random() * allMemes.length)
        const img = allMemes[randNum].url
        setMeme(prev => ({
            ...prev,
            imageUrl : img
        }))
    }
    function handleChange(e){
        const {value,name} = e.target
        setMeme(prev => ({
            ...prev,
            [name] : value
        }))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input type="text" name="topText" id="topText" placeholder="one does not simply" onChange={handleChange} value={meme.topText} />

                </label>
                <label>Botton Text
                    <input type="text" name="bottomText" id="bottomText" placeholder="Walk into mordor" onChange={handleChange} value={meme.bottomText}/>

                </label>
                <button onClick={getMeme}>Get a Meme Image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}