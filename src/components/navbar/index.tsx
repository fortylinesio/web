import React from 'react';
import * as ReactRedux from 'react-redux';

import * as AppRedux from '../../redux';
import Strings from '../../strings';

import './index.scss';

export const Navbar = () => {
  const dispatch = ReactRedux.useDispatch();
  const lang = ReactRedux.useSelector((state: AppRedux.AppState) => state.language);
  const [isActive, setActive] = React.useState(false);

  const handleBurgerClick = () => {
    setActive(!isActive)
  }

  const handleLanguageClick = (lang: 'en' | 'de' | 'ru') => (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(AppRedux.SetLanguage(lang));
  };

  return (
    <div className='navbar is-transparent is-spaced'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <div className='title is-4'>
              {Strings[lang].navigation_title}
            </div>
          </div>
          <div className={'navbar-burger' + (isActive ? ' is-active' : '')} onClick={handleBurgerClick}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </div>
        </div>
        <div className={'navbar-menu' + (isActive ? ' is-active' : '')}>
          <div className='navbar-start'>
            <a className='navbar-item is-active' href='/'>
              {Strings[lang].navigation_link_what_we_do}
            </a>
            <a className='navbar-item' href='/'>
              {Strings[lang].navigation_link_services}
            </a>
            <a className='navbar-item' href='/'>
              {Strings[lang].navigation_link_projects}
            </a>
            <a className='navbar-item' href='/'>
              {Strings[lang].navigation_link_team}
            </a>
            <a className='navbar-item' href='/'>
              {Strings[lang].navigation_link_contacts}
            </a>
          </div>
          <div className='navbar-end'>
            <a className={'navbar-item' + (lang === 'en' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('en')}>
              {Strings[lang].navigation_lang_en}
            </a>
            <a className={'navbar-item' + (lang === 'de' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('de')}>
              {Strings[lang].navigation_lang_de}
            </a>
            <a className={'navbar-item' + (lang === 'ru' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('ru')}>
              {Strings[lang].navigation_lang_ru}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};
