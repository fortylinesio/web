import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

import ImageFirst from './image_first.svg';
import ImageSecond from './image_second.svg';
import ImageThird from './image_third.svg';
import ImageFourth from './image_fourth.svg';

export const WhatWeDo = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div className='container what-we-do'>

      <div className='left-spaced with-line'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.what_we_do_title }} />
      </div>

      <div className='columns is-variable is-8 is-align-items-center'>
        <div className='column'>
          <img src={ImageFirst} />
        </div>
        <div className='column'>
          <div className='title is-4'>{strings.what_we_do_first_title}</div>
          <div />
          <div className='subtitle is-5'>{strings.what_we_do_first_subtitle}</div>
        </div>
      </div>

      <div className='columns is-variable is-8 is-align-items-center'>
        <div className='column'>
          <div className='title is-4'>{strings.what_we_do_second_title}</div>
          <div />
          <div className='subtitle is-5'>{strings.what_we_do_second_subtitle}</div>
        </div>
        <div className='column'>
          <img src={ImageSecond} />
        </div>
      </div>

      <div className='columns is-variable is-8 is-align-items-center'>
        <div className='column'>
          <img src={ImageThird} />
        </div>
        <div className='column'>
          <div className='title is-4'>{strings.what_we_do_third_title}</div>
          <div />
          <div className='subtitle is-5'>{strings.what_we_do_third_subtitle}</div>
        </div>
      </div>

      <div className='columns is-variable is-8 is-align-items-center'>
        <div className='column'>
          <div className='title is-4'>{strings.what_we_do_fourth_title}</div>
          <div />
          <div className='subtitle is-5'>{strings.what_we_do_fourth_subtitle}</div>
        </div>
        <div className='column'>
          <img src={ImageFourth} />
        </div>
      </div>
    </div>
  )
}
