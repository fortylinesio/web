import React from 'react';
import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

export const Team = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);

  const [members] = React.useState(strings.team_members);
  const [index, setIndex] = React.useState(0);

  const nextMember = () => {
    setIndex(index < members.length - 1 ? index + 1 : 0);
  }

  return (
    <div className='container team'>
      <div className='left-spaced with-line'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.team_title }} />
      </div>
      <div className='tinder'>
        <div className='cards'>
          <div className='card empty'>
            <div className='title'>That's it!</div>
            <div className='subtitle'>Wanna roll again?</div>
          </div>
          <div className='card' style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, .48) 0%, transparent 100%), url(' + members[index].profile_url + ')',
          }}>
            <div className='info'>
              <div className='title'>{members[index].first_name}, {members[index].age}</div>
              <div className='subtitle'>{members[index].position}</div>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button className='button is-dislike' onClick={() => nextMember()}>
            <span className='icon'>
              <i className='fas fa-times fa-lg' />
            </span>
          </button>
          <button className='button is-like' onClick={() => nextMember()}>
            <span className='icon'>
              <i className='fas fa-heart fa-lg' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
