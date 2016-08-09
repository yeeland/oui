import React from 'react';

import ProjectsIcon16 from 'oui-icons/src/16/projects-16.svg';
import ProjectsIcon24 from 'oui-icons/src/24/projects-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ProjectsIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ProjectsIcon16;
      break;
    case 24:
      Svg = ProjectsIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

ProjectsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ProjectsIcon;

