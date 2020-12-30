import React from 'react';
import * as ReactRedux from 'react-redux';
import * as AppRedux from '../../redux';

interface Props {
  className?: string,
  onClick?: () => void,
}

export const NavigationLinks = ({
  className = 'item',
  onClick,
}: Props) => {
  const strings = ReactRedux.useSelector((state: AppRedux.AppState) => state.strings);

  const goto = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      onClick && onClick();
    }
  }

  return (
    <React.Fragment>
      <a className={className} href='/' onClick={goto('what-we-do')}>
        {strings.navigation_link_what_we_do}
      </a>
      <a className={className} href='/' onClick={goto('services')}>
        {strings.navigation_link_services}
      </a>
      <a className={className} href='/' onClick={goto('projects')}>
        {strings.navigation_link_projects}
      </a>
      <a className={className} href='/' onClick={goto('team')}>
        {strings.navigation_link_team}
      </a>
      <a className={className} href='/' onClick={goto('contacts')}>
        {strings.navigation_link_contacts}
      </a>
    </React.Fragment>
  )
}
