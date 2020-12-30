import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';
import * as Components from '../';

import './index.scss';

export const Footer = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div className='footer app-section has-text-centered-mobile'>
      <div className='container'>
        <blockquote className='subtitle slogan'>{strings.footer_slogan}</blockquote>
        <Components.SocialIcons />
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
      </div>
    </div>
  )
}
