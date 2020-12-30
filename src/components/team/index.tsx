import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';
import Swiper from 'react-id-swiper';

import './index.scss';

export const Team = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  return (
    <div className='container team'>
      <div className='left-spaced with-line'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.team_title }} />
      </div>

      <div style={{ height: 64 }} />

      <div>
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
        >
          {strings.team_members.map((member, i) => (
            <div key={i} className='member' style={{
              backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, .48) 0%, transparent 100%), url(' + member.profile_url + ')',
            }}>
              <div className='info'>
                <div className='title'>{member.first_name}, {member.age}</div>
                <div className='subtitle'>{member.position}</div>
              </div>
            </div>
          ))}
        </Swiper>
      </div>

      <div style={{ height: 32 }} />
    </div>
  )
}
