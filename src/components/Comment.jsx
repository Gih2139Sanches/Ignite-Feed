import { Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}){
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gih2139sanches.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Giovana Sanches</strong>
                            <time title='11 de maio ás 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}