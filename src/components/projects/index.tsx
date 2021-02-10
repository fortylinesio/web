import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

import ImageTezBus from './image-tezbus.png';
import ImageChkSnd from './image-chksnd.png';

export const Projects = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div id='projects' className='container projects app-section'>
      <div className='left-spaced with-line'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.projects_title }} />
      </div>

      <div className='app-section-spacer' />

      <div className=''>
        <div className='columns has-text-centered-mobile is-8 is-align-items-center'>
          <div className='column'>
            <div className='title is-4'>{strings.projects_tezbus_title}</div>
            <div className=''>{strings.projects_tezbus_subtitle}</div>
          </div>
          <div className='column'>
            <img src={ImageTezBus} alt='4+2=42' />
          </div>
        </div>

        <div className='app-section-spacer' />

        <div className='columns has-text-centered-mobile is-8 is-align-items-center reverse-on-mobile'>
          <div className='column'>
            <img src={ImageChkSnd} alt='4+2=42' />
          </div>
          <div className='column'>
            <div className='title is-4'>{strings.projects_chksnd_title}</div>
            <div className='' dangerouslySetInnerHTML={{ __html: strings.projects_chksnd_subtitle }} />
          </div>
        </div>
      </div>
    </div>
  )
}
