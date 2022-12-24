import { useState } from "react";
import './Comment.css'

import Avatar from "../Avatar/Avatar";

import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export default function Comment({ content, onDeleteComment }: CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className="Comment">
            <Avatar hasBorder={false} src="https://github.com/PedroVeras18.png"/>

            <div className="CommentBox">
                <div className="CommentContent">
                    <header>
                        <div className="AuthorAndTime">
                            <strong>Pedro Veras</strong>
                            <time title="04 de Dezembro às 08:13h" dateTime="2022-12-04 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={22}></Trash>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}