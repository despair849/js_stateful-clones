'use strict';

function transformStateWithClones(state, actions) {
  const currentState = { ...state };
  const history = [];

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in currentState) {
          delete currentState[key];
        }
        history.push({ ...currentState });
        break;
      case 'addProperties':
        Object.assign(currentState, action.extraData);
        history.push({ ...currentState });
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        history.push({ ...currentState });
        break;
    }
  }

  return history;
}

module.exports = transformStateWithClones;
