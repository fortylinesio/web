import './index.scss';

export const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <a className='icon github' href='https://clutch.co/profile/fortylines-io' target='_blank' rel='noreferrer'>
      <i className='fas fa-copyright' />
      </a>
      <a className='icon github' href='https://github.com/fortylinesio' target='_blank' rel='noreferrer'>
        <i className='fab fa-github' />
      </a>
      <a className='icon linkedin' href='https://www.linkedin.com/company/fortylines-io/about/' target='_blank' rel='noreferrer'>
        <i className='fab fa-linkedin' />
      </a>
      <a className='icon telegram' href='https://web.telegram.org/#/im?p=@sherazhy' target='_blank' rel='noreferrer'>
        <i className='fab fa-telegram' />
      </a>
      <a className='icon instagram' href='https://www.instagram.com/fortylines.io/' target='_blank' rel='noreferrer'>
        <i className='fab fa-instagram' />
      </a>
    </div>
  )
}
