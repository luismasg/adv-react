import React, { useContext, useState, useEffect } from 'react'
///////////////////////////////
// Mini Redux implementation //
///////////////////////////////

const validateAction = action => {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object!')
  }
  if (typeof action.type === 'undefined') {
    throw new Error('Action must have a type!')
  }
}

const createStore = reducer => {
  let state
  const subscribers = []
  const store = {
    dispatch: action => {
      validateAction(action)
      state = reducer(state, action)
      subscribers.forEach(handler => handler())
    },
    getState: () => state,
    subscribe: handler => {
      subscribers.push(handler)
      return () => {
        const index = subscribers.indexOf(handler)
        if (index > 0) {
          subscribers.splice(index, 1)
        }
      }
    },
  }
  store.dispatch({ type: '@@redux/INIT' })
  return store
}

// let Redux

function createRedux(store) {
  const Context = React.createContext(store)
  const connect = (
    mapStateToProps = () => ({}),
    mapDispatchToProps = () => ({}),
  ) => Component =>
    function Connected({ props }) {
      const ctx = useContext(Context)
      const state = ctx.getState()
      const [dispatchProps] = useState(() =>
        mapDispatchToProps(ctx.dispatch, props),
      )
      const [stateForComponent, setState] = useState(() => {
        const stateProps = mapStateToProps(state, props)
        return { ...stateProps }
      })

      useEffect(() => {
        return ctx.subscribe(() => {
          const state = ctx.getState()
          const stateProps = mapStateToProps(state, props)
          setState({ ...stateProps })
        })
      }, [stateForComponent])
      return <Component {...props} {...stateForComponent} {...dispatchProps} />
    }

  class ProviderWithStore extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <Context.Provider value={this.props.store}>
          {this.props.children}
        </Context.Provider>
      )
    }
  }
  ProviderWithStore.propTypes = {
    store: Object,
    children: React.Children,
  }

  return { connect, Provider: ProviderWithStore }
}

//////////////////////
// Our action types //
//////////////////////

const CREATE_NOTE = 'CREATE_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const OPEN_NOTE = 'OPEN_NOTE'
const CLOSE_NOTE = 'CLOSE_NOTE'

/////////////////
// Our reducer //
/////////////////

const initialState = {
  nextNoteId: 1,
  notes: {},
  openNoteId: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      const id = state.nextNoteId
      const newNote = {
        id,
        content: '',
      }
      return {
        ...state,
        nextNoteId: id + 1,
        openNoteId: id,
        notes: {
          ...state.notes,
          [id]: newNote,
        },
      }
    }
    case UPDATE_NOTE: {
      const { id, content } = action
      const editedNote = {
        ...state.notes[id],
        content,
      }
      return {
        ...state,
        notes: {
          ...state.notes,
          [id]: editedNote,
        },
      }
    }
    case OPEN_NOTE: {
      return {
        ...state,
        openNoteId: action.id,
      }
    }
    case CLOSE_NOTE: {
      return {
        ...state,
        openNoteId: null,
      }
    }
    default:
      return state
  }
}

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

const NoteList = ({ notes, onOpenNote }) => {
  return (
    <ul className="note-list">
      {Object.keys(notes).map(id => (
        <NoteLink key={id} note={notes[id]} onOpenNote={onOpenNote} />
      ))}
    </ul>
  )
}

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

const mapStateToProps = state => ({
  notes: state.notes,
  openNoteId: state.openNoteId,
})

const mapDispatchToProps = dispatch => ({
  onAddNote: () =>
    dispatch({
      type: CREATE_NOTE,
    }),
  onChangeNote: (id, content) =>
    dispatch({
      type: UPDATE_NOTE,
      id,
      content,
    }),
  onOpenNote: id =>
    dispatch({
      type: OPEN_NOTE,
      id,
    }),
  onCloseNote: () =>
    dispatch({
      type: CLOSE_NOTE,
    }),
})

const { Provider, connect } = createRedux()

const NoteAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteApp)

export default function DIYRedux() {
  return (
    <Provider store={store}>
      <NoteAppContainer />
    </Provider>
  )
}
