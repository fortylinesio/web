import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

export const Services = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div className='container services'>
      <div className='left-spaced with-line'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.services_title }} />
      </div>

      <div style={{ height: 64 }} />

      <div className='columns list'>
        <div className='column'>
          <div className='item has-text-centered'>
            <div className='title is-4'>{strings.services_web_title}</div>
            <div className=''>{strings.services_web_subtitle}</div>
          </div>
        </div>
        <div className='column'>
          <div className='item has-text-centered'>
            <div className='title is-4'>{strings.services_mobile_title}</div>
            <div className=''>{strings.services_mobile_subtitle}</div>
          </div>
        </div>
        <div className='column'>
          <div className='item has-text-centered'>
            <div className='title is-4'>{strings.services_bots_title}</div>
            <div className=''>{strings.services_bots_subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
