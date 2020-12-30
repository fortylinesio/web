import React from 'react';
import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';
import * as Components from '../';

import './index.scss';

export const Navbar = () => {
  const dispatch = ReactRedux.useDispatch();

  const lang = ReactRedux.useSelector((state: AppRedux.AppState) => state.lang);
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);

  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    if (isActive) {
      window.scrollTo(0, 0);
    }

    const menu = document.getElementById('mobile-menu');
    if (menu) {
      if (isActive) {
        menu.style.height = '100%';
      } else {
        setTimeout(() => {
          menu.style.height = '0';
        }, 320);
      }
    }
  }, [isActive])

  const handleBurgerClick = () => {
    setActive(!isActive)
  }

  const handleLanguageClick = (lang: 'en' | 'de' | 'ru') => (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(AppRedux.SetLanguage(lang));
  };

  const jumpToContacts = () => {
    setActive(false);
    const el = document.getElementById('contacts');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className='navbar is-spaced is-transparent'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <div className='title is-4'>
              {strings.navigation_title}
            </div>
          </div>
          <div className={'navbar-burger' + (isActive ? ' is-active' : '')} onClick={handleBurgerClick}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <Components.NavigationLinks className='navbar-item' />
          </div>
          <div className='navbar-end'>
            <a className={'navbar-item' + (lang === 'en' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('en')}>
              {strings.navigation_lang_en}
            </a>
            <a className={'navbar-item' + (lang === 'de' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('de')}>
              {strings.navigation_lang_de}
            </a>
            <a className={'navbar-item' + (lang === 'ru' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('ru')}>
              {strings.navigation_lang_ru}
            </a>
          </div>
        </div>
      </div>
      <div id='mobile-menu' className={'mobile-menu' + (isActive ? ' is-active' : '')}>
        <div className='overlay' />
        <div className='content'>
          <div className='header'>
            <div className='title is-4'>
              {strings.navigation_title}
            </div>
            <a className='close' href='/' onClick={e => {
              e.preventDefault();
              setActive(false);
            }}>
              <span className='icon'>
                <i className='fa fa-times fa-lg' />
              </span>
            </a>
          </div>
          <div className='languages'>
            <a className={'item' + (lang === 'en' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('en')}>
              {strings.navigation_lang_en}
            </a>
            <a className={'item' + (lang === 'de' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('de')}>
              {strings.navigation_lang_de}
            </a>
            <a className={'item' + (lang === 'ru' ? ' is-active' : '')} href='/' onClick={handleLanguageClick('ru')}>
              {strings.navigation_lang_ru}
            </a>
          </div>
          <div className='navigation'>
            <Components.NavigationLinks onClick={() => {
              setActive(false);
            }} />
          </div>
          <Components.SocialIcons />
          <div className='contacts'>
            <div className='item'>{strings.contact_phone_a}</div>
            <div className='item'>{strings.contact_phone_b}</div>
            <a className='item' href={'mailto:' + strings.contact_email}>{strings.contact_email}</a>
            <div className='item divider' />
            <div className='item'>
              <button className='button is-medium is-primary' onClick={jumpToContacts}>{strings.cover_contact_us}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
