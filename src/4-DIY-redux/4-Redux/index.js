import React from 'react'

const validateAction = action => {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object!')
  }
  if (typeof action.type === 'undefined') {
    throw new Error('Action must have a type!')
  }
}

const createStore = reducer => {}

const CREATE_NOTE = 'CREATE_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const OPEN_NOTE = 'OPEN_NOTE'
const CLOSE_NOTE = 'CLOSE_NOTE'

const initialState = {
  nextNoteId: 1,
  notes: {},
  openNoteId: null,
}

const reducer = (state = initialState, action) => {}

const store = createStore(reducer)

const NoteEditor = ({ note, onChangeNote, onCloseNote }) => (
  <div>
    <div>
      <textarea
        className="editor-content"
        autoFocus
        value={note.content}
        onChange={event => onChangeNote(note.id, event.target.value)}
      />
    </div>
    <button className="editor-button" onClick={onCloseNote}>
      Close
    </button>
  </div>
)

NoteEditor.propTypes = {
  note: String,
  onChangeNote: Function,
  onCloseNote: Function,
}

const NoteTitle = ({ note }) => {
  const title = note.content.split('\n')[0].replace(/^\s+|\s+$/g, '')
  if (title === '') {
    return <i>Untitled</i>
  }
  return <span>{title}</span>
}

NoteTitle.propTypes = {
  note: String,
}

const NoteLink = ({ note, onOpenNote }) => (
  <li className="note-list-item">
    <a href="#" onClick={() => onOpenNote(note.id)}>
      <NoteTitle note={note} />
    </a>
  </li>
)

NoteLink.propTypes = {
  note: String,
  onOpenNote: Function,
}

const NoteList = ({ notes, onOpenNote }) => (
  <ul className="note-list">
    {Object.keys(notes).map(id => (
      <NoteLink key={id} note={notes[id]} onOpenNote={onOpenNote} />
    ))}
  </ul>
)

NoteList.propTypes = {
  notes: [String],
  onOpenNote: Function,
}

const NoteApp = ({
  notes,
  openNoteId,
  onAddNote,
  onChangeNote,
  onOpenNote,
  onCloseNote,
}) => (
  <div>
    {openNoteId ? (
      <NoteEditor
        note={notes[openNoteId]}
        onChangeNote={onChangeNote}
        onCloseNote={onCloseNote}
      />
    ) : (
      <div>
        <NoteList notes={notes} onOpenNote={onOpenNote} />
        {
          <button className="editor-button" onClick={onAddNote}>
            New Note
          </button>
        }
      </div>
    )}
  </div>
)

NoteApp.propTypes = {
  notes: [String],
  openNoteId: Number,
  onOpenNote: Function,
  onAddNote: Function,
  onChangeNote: Function,
  onCloseNote: Function,
}

class NoteAppContainer extends React.Component {
  constructor(props) {
    super()
    this.state = props.store.getState()
    this.onAddNote = this.onAddNote.bind(this)
    this.onChangeNote = this.onChangeNote.bind(this)
    this.onOpenNote = this.onOpenNote.bind(this)
    this.onCloseNote = this.onCloseNote.bind(this)
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.setState(this.props.store.getState()),
    )
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  onAddNote() {
    this.props.store.dispatch({
      type: CREATE_NOTE,
    })
  }
  onChangeNote(id, content) {
    this.props.store.dispatch({
      type: UPDATE_NOTE,
      id,
      content,
    })
  }
  onOpenNote(id) {
    this.props.store.dispatch({
      type: OPEN_NOTE,
      id,
    })
  }
  onCloseNote() {
    this.props.store.dispatch({
      type: CLOSE_NOTE,
    })
  }
  render() {
    return (
      <NoteApp
        {...this.state}
        onAddNote={this.onAddNote}
        onChangeNote={this.onChangeNote}
        onOpenNote={this.onOpenNote}
        onCloseNote={this.onCloseNote}
      />
    )
  }
}

NoteAppContainer.propTypes = {
  store: Object,
}

export default function DIYRedux() {
  return null
  // return <NoteAppContainer store={store} />
}
