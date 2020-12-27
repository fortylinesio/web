import * as ReactRedux from 'react-redux';
import * as Components from '../';
import * as AppRedux from '../../redux';

import './index.scss';

export const Cover = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);

  return (
    <div className='cover'>
      <div className='container'>
        <div className='columns is-align-items-center'>
          <div className='column'>
            <Components.Illustration />
          </div>
          <div className='column'>
            <div className='left-spaced with-line'>
              <div className='subtitle is-3' dangerouslySetInnerHTML={{ __html: strings.cover_title }} />
            </div>
            <div className='left-spaced'>
              <button className='button is-primary is-medium'>
                {strings.cover_contact_us}
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
