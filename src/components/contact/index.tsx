import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

export const Contact = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div id='contacts' className='container contact app-section'>
      <div className='columns'>
        <div className='column'>
          <div className='left-spaced with-line has-text-centered-mobile'>
            <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.cover_contact_us }} />
          </div>
          <div className='left-spaced'>
            <div className='has-text-centered-mobile'>
              <div className='has-text-grey-light'>{strings.contact_address_label}:</div>
              <br />
              <div className=''>
                <strong>{strings.contact_address_location}</strong>
              </div>
              <div className=''>{strings.contact_address_street}</div>
              <div className=''>{strings.contact_email}</div>
              <br />
              <div className='has-text-grey-light'>{strings.contact_phone_label}:</div>
              <br />
              <div className=''>{strings.contact_phone_a}</div>
              <div className=''>{strings.contact_phone_b}</div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='call-back'>
            <form className='call-back-form'>
              <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.call_back_title }} />

              <div className='field'>
                <label htmlFor='name' className='label'>{strings.call_back_placeholder_name}</label>
                <div className='control'>
                  <input id='name' className='input' />
                </div>
              </div>
              <div className='field'>
                <label htmlFor='phone' className='label'>{strings.call_back_placeholder_phone}</label>
                <div className='control'>
                  <input id='phone' className='input' type='tel' placeholder='+996 550 123 456' />
                </div>
              </div>
              <div className='field'>
                <label htmlFor='email' className='label'>{strings.call_back_placeholder_email}</label>
                <div className='control'>
                  <input id='email' className='input' type='email' placeholder='user@mail.com' />
                </div>
              </div>
              <br />
              <button className='button is-fullwidth is-medium is-primary'>{strings.call_back_send}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
