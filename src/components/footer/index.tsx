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
          <Components.NavigationLinks />
        </div>
        <div className='has-text-centered'>
          <div className='links'>
            <a href='/'>{strings.footer_legal_terms}</a>
            <p>|</p>
            <a href='/'>{strings.footer_legal_privacy}</a>
          </div>
          <p dangerouslySetInnerHTML={{ __html: strings.footer_copyright }} />
        </div>
        <div style={{ height: 32 }} />
        <div className='has-text-centered' style={{ lineHeight: '16px', color: '#aaa' }}>
          <div>
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
          <div>by</div>
          <a href='https://github.com/aimazh' target='_blank' rel='noreferrer' style={{ color: '#aaa' }}>
            <strong>@aimazh</strong>
          </a>
        </div>
      </div>
    </div>
  )
}
