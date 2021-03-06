import {
  SWITCH_PROJECT,
  SWITCH_FILE,
  CLEAR_NOTE,
  CLEAR_NOTE_WORKSCAPE,
  UPDATE_NOTE_PROJECTNAME,
} from '../actions/note';

const assign = Object.assign;

export default function updateNote(state = {
  projectUuid: '-1',
  projectName: '',
  fileUuid: '-1',
  fileName: '',
  exportStatus: 0, // 0: wait 1: pending 2:success 3: failed
}, action) {
  switch (action.type) {
    case SWITCH_PROJECT: {
      const { uuid, name } = action;
      return assign({}, state, {
        projectUuid: uuid,
        projectName: name,
      });
    }
    case SWITCH_FILE:
      return assign({}, state, {
        fileUuid: action.uuid,
        fileName: action.fileName,
      });
    case CLEAR_NOTE:
      return assign({}, state, {
        fileUuid: '-1',
        fileName: '',
      });
    case CLEAR_NOTE_WORKSCAPE:
      return assign({}, {
        projectUuid: '-1',
        projectName: '',
        fileUuid: '-1',
        fileName: '',
      });
    case UPDATE_NOTE_PROJECTNAME: {
      const { name } = action;
      return assign({}, state, {
        projectName: name,
      });
    }
    default:
      return state;
  }
}
