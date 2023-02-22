import React, { useEffect } from "react"

export default function Header() {

    const sound = new Audio("https://us-tuna-sounds-files.voicemod.net/ea56c733-d8f8-4e71-8871-9fce6bb71310-1673083719676.mp3")

    useEffect(() => {
        const element = document.querySelector(".play-sound")
        element.addEventListener("mouseup", () => {
            sound.play()
            })
    }, [])

    function memeSource() {
        window.open("https://knowyourmeme.com/memes/borzoi-long-nose-dog/#on-tiktok")
    }

    return (
        <header className="header">
            <img
                src="../src/assets/icon.png"
                className="header--image"
            />
            <h2 className="header--title">letme<span className="play-sound" onClick={memeSource}>memeit</span>foryou</h2>
        </header>
    )
}