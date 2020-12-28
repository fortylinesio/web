import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

export const Footer = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div className='footer'>
      <div className='container'>
        <div className='subtitle'>{strings.footer_slogan}</div>
        <div className='navigation'>
          <a className='item' href='/'>{strings.navigation_link_services}</a>
          <a className='item' href='/'>{strings.navigation_link_projects}</a>
          <a className='item' href='/'>{strings.navigation_link_team}</a>
          <a className='item' href='/'>{strings.navigation_link_contacts}</a>
        </div>
        <div className='has-text-centered'>
          <div className='links'>
            <a href='/'>{strings.footer_legal_terms}</a>
            <p>|</p>
            <a href='/'>{strings.footer_legal_privacy}</a>
          </div>
          <p dangerouslySetInnerHTML={{ __html: strings.footer_copyright }} />
        </div>
        <div className='social-icons'>
          <a className='icon facebook' href='/'>
            <i className='fab fa-facebook' />
          </a>
          <a className='icon twitter' href='/'>
            <i className='fab fa-twitter' />
          </a>
          <a className='icon instagram' href='/'>
            <i className='fab fa-instagram' />
          </a>
          <a className='icon telegram' href='/'>
            <i className='fab fa-telegram' />
          </a>
          <a className='icon whatsapp' href='/'>
            <i className='fab fa-whatsapp' />
          </a>
        </div>
      </div>
    </div>
  )
}
