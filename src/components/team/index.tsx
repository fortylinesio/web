import React from 'react';
import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';
import Swiper from 'react-id-swiper';

import './index.scss';

export const Team = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  const ref = React.useRef<any>();

  return (
    <div id='team' className='container team app-section'>
      <div className='left-spaced with-line has-text-centered-mobile'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.team_title }} />
      </div>

      <div className='app-section-spacer' />

      <div className='swiper'>
        <Swiper
          ref={ref}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
        >
          {strings.team_members.map((member, i) => (
            <div key={i} className='member' style={{
              backgroundImage: 'url(' + member.profile_url + ')',
            }}>
              <div className='info'>
                <div className='title'>{member.first_name}</div>
                <div className='subtitle'>{member.position}</div>
                {member.links.length > 0 && (
                  <div className='links'>
                    {member.links.map((link, j) => (
                      <a key={j} href={link.url} target='_blank' rel='noreferrer'>
                        <span className={'icon ' + link.media}>
                          {(() => {
                            if(link.media === 'envelope') {
                              return <i className={'fas fa-lg fa-' + link.media} />
                            } else {
                              return <i className={'fab fa-lg fa-' + link.media} />
                            }
                          })()}  
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Swiper>

        <div className='buttons'>
          <button className='button is-outlined' onClick={() => {
            if (ref.current) {
              if (ref.current.swiper) {
                ref.current.swiper.slidePrev();
              }
            }
          }}>
            <span className='icon'>
              <i className='fas fa-lg fa-angle-left' />
            </span>
          </button>
          <button className='button is-outlined' onClick={() => {
            if (ref.current) {
              if (ref.current.swiper) {
                ref.current.swiper.slideNext();
              }
            }
          }}>
            <span className='icon'>
              <i className='fas fa-lg fa-angle-right' />
            </span>
          </button>
        </div>
      </div>

      <div style={{ height: 32 }} />
    </div>
  )
}
