import React from "react"
import logo from './logo.png'
import search from './search.png'
import './Cabecalho.module.css'

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <img src={logo} alt="Logo do Alura Space"/>
            <div className="cabecalho__container">
                <input className="cabecalho__input" type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Ícone de busca (lupa)"/>
            </div>
        </header>
    )
}