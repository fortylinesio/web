import * as Strings from '../strings';

export interface AppState {
  lang: Strings.Lang,
  strings: Strings.Type,
}

export const SET_LANGUAGE = '@SET_LANGUAGE';

interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  targetLang: Strings.Lang;
}

export type AppActionTypes = SetLanguageAction

export const SetLanguage = (targetLang: Strings.Lang): SetLanguageAction => ({
  type: SET_LANGUAGE,
  targetLang: targetLang,
})

const defaultState: AppState = {
  lang: 'en',
  strings: Strings.en,
}

export const appReducer = (state: AppState = defaultState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_LANGUAGE:
      var strings: Strings.Type
      switch (action.targetLang) {
        case 'ru': strings = Strings.ru; break;
        case 'de': strings = Strings.de; break;
        default: strings = Strings.en; break;
      }
      return {
        ...state,
        lang: action.targetLang,
        strings,
      };
    default:
      return state;
  }
}
