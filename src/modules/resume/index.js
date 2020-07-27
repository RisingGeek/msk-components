// Export the component in this file to display in the preview

import metadata from './metadata'

import Cover from './cover'
import Introduction from './introduction'
import Experience from './experience'
import Education from './education'
import Projects from './projects'
import Skillset from './skill-set'
import HonoursAndAwards from './honours-and-awards';

const components = {
  Cover,
  Introduction,
  Experience,
  Education,
  Projects,
  Skillset,
  HonoursAndAwards
}

const Resume = {
  metadata,
  components
}

export default Resume;