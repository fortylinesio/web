import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

import './index.scss';

export const Projects = () => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);
  const projects = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings.projects_items);

  return (
    <div id='projects' className='container projects app-section'>
      <div className='left-spaced with-line has-text-centered-mobile'>
        <div className='title is-2' dangerouslySetInnerHTML={{ __html: strings.projects_title }} />
      </div>

      <div className='app-section-spacer' />

      <div className=''>
        {projects.map((project, i) => (
          <div key={i}>
            <div className={'columns has-text-centered-mobile is-8 is-align-items-center' + (i % 2 !== 0 ? ' reverse-on-mobile' : '')}>
              {i % 2 === 0 && (
                <div className='column'>
                  <img src={project.image_url} alt='4+2=42' />
                </div>
              )}
              <div className='column'>
                <div className='title is-4'>{project.title}</div>
                <div className='' dangerouslySetInnerHTML={{ __html: project.subtitle }} />
                <br />
                <a className='button is-primary is-outlined' target='_blank' rel='noreferrer' href={project.link}>{strings.projects_website}</a>
              </div>
              {i % 2 !== 0 && (
                <div className='column'>
                  <img src={project.image_url} alt='4+2=42' />
                </div>
              )}
            </div>
            {i < projects.length - 1 && (
              <div className='app-section-spacer' />
            )}
          </div>
        ))}

      </div>
    </div>
  )
}
