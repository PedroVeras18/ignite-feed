import './Sidebar.css'

import Avatar from "../Avatar/Avatar";
import { PencilLine } from 'phosphor-react'

export default function Sidebar(){
    return(
        <aside className="Sidebar">
            <img className="Cover" src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5000&q=60" alt="" />

            <div className="Profile">
                <Avatar src="https://github.com/PedroVeras18.png"/>

                <strong>Pedro Veras</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )
}