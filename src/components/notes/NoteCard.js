import { Link } from "react-router-dom";

function NoteCard(props) {
    const { note } = props;

    return (

        <div className="grid-item">

            <Link className="thumbnail-link"
                to={{
                    pathname: "/notes/" + note.noteId,
                    state: { noteId: note.noteId }
                }}
            >
                <img className="card-image" src={note.imgPath} alt="note" />
            </Link>

            <div className="card-info">
                <Link className="card-link"
                    to={{
                        pathname: "/notes/" + note.noteId,
                        state: { noteId: note.noteId }
                    }}
                >
                    <div className="card-name">{note.name}</div>

                </Link>
            </div>
        </div>
    );
}

export default NoteCard;
