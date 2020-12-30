import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

import ImageTezBus from './image-tezbus.svg';
import ImageChkSnd from './image-chksnd.png';

export const Projects = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div className='container projects'>
      <div className='left-spaced with-line'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.projects_title }} />
      </div>

      <div style={{ height: 64 }} />

      <div className='columns is-variable is-8 is-align-items-center'>
        <div className='column'>
          <div className='title is-4'>{strings.projects_tezbus_title}</div>
          <div className=''>{strings.projects_tezbus_subtitle}</div>
        </div>
        <div className='column'>
          <img src={ImageTezBus} />
        </div>
      </div>

      <div style={{ height: 64 }} />

      <div className='columns is-variable is-8 is-align-items-center'>
        <div className='column'>
          <img src={ImageChkSnd} />
        </div>
        <div className='column'>
          <div className='title is-4'>{strings.projects_chksnd_title}</div>
          <div className='' dangerouslySetInnerHTML={{ __html: strings.projects_chksnd_subtitle }} />
        </div>
      </div>
    </div>
  )
}
