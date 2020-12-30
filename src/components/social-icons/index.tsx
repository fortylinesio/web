import './index.scss';

export const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <a className='icon' href='https://github.com/fortylinesio' target='_blank' rel='noreferrer'>
        <i className='fab fa-github' />
      </a>
      <a className='icon twitter' href='/'>
        <i className='fab fa-twitter' />
      </a>
      <a className='icon telegram' href='/'>
        <i className='fab fa-telegram' />
      </a>
      <a className='icon whatsapp' href='/'>
        <i className='fab fa-whatsapp' />
      </a>
    </div>
  )
}
