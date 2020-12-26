import * as Components from '../';
import * as ReactRedux from 'react-redux';

import * as AppRedux from '../../redux';
import Strings from '../../strings';

import './index.scss';

export const Cover = () => {
  const lang = ReactRedux.useSelector((state: AppRedux.AppState) => state.language);

  return (
    <div className='cover'>
      <div className='container'>
        <div className='columns is-align-items-center'>
          <div className='column'>
            <Components.Illustration />
          </div>
          <div className='column'>
            <div className='left-spaced with-line'>
              <div className='subtitle is-3' dangerouslySetInnerHTML={{ __html: Strings[lang].cover_title }} />
            </div>
            <div className='left-spaced'>
              <button className='button is-primary is-medium'>
                {Strings[lang].cover_contact_us}
              </button>
            </div>
          </div>
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
