const sections = (state = {}, action) => {
  if (action) {
    switch (action.type) {
      case 'set': {
        const { id, height } = action.payload
        if (height > 0) {
          return {
            ...state,
            [id]: height
          }
        }

        const newState = { ...state }
        delete newState[id]
        return newState
      }

      default:
    }
  }
  return state
}

const initialState = {
  onTop: true,
  sections: sections()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'top':
      return {
        ...state,
        onTop: action.payload
      }

    case 'set':
      return {
        ...state,
        sections: sections(state.sections, action)
      }

    default:
  }

  return state
}

export default reducer

// Actions

const setTop = isOnTop => ({ type: 'top', payload: isOnTop })
const intersect = (sectionId, height) => ({
  type: 'set',
  payload: {
    id: sectionId,
    height
  }
})


// Selectors

const isOnTop = ({ onTop } = initialState) => onTop

const getSections = (state = initialState) => state.sections
const getSelectedSection = (state = initialState) => {
  if (isOnTop(state)) {
    return null
  }

  const s = getSections(state)
  return Object.keys(s).reduce((ret, sectId) => {
    return ret === null || s[ret] < s[sectId] ? sectId : ret
  }, null)
}

export { intersect, setTop, isOnTop, getSelectedSection }
