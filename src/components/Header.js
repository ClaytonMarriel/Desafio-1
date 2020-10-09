import React from 'react'

//Montando a estrutura do Header da página

function Header() {
    return (
        <header>
            <nav>
                <img src="https://i.imgur.com/KDIDiSE.png" />
                <div>
                    <span>Meu perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
    )
}

export default Header;