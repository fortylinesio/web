
export interface AppState {
  language: 'en' | 'de' | 'ru';
}

export const SET_LANGUAGE = '@SET_LANGUAGE';

interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  targetLanguage: 'en' | 'de' | 'ru';
}

export type AppActionTypes = SetLanguageAction

export const SetLanguage = (targetLanguage: 'en' | 'de' | 'ru'): SetLanguageAction => ({
  type: SET_LANGUAGE,
  targetLanguage,
})

const defaultState: AppState = {
  language: 'en',
}

export const appReducer = (state: AppState = defaultState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.targetLanguage,
      };
    default:
      return state;
  }
}
