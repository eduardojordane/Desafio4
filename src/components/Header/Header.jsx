import React from 'react'
import './Header.scss'
import '../../global.scss'
import {useState} from 'react';


const Header = () => {

  const [isBright, setisBright] = useState(false)

  return (
    <div className="header" bright-theme={isBright ? "bright" : "dark"}>
        <button>Organização</button>
        <button>Tarefas</button>
    </div>
  )
}

//não usei BEM porque dada a necessidade, usá-lo seria mais trabalhoso

export default Header