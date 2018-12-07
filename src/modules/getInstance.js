import { instanceLibs } from './libraries';

function getInstance() {
  // Match the current lib to generic library;
  const libMatch = instanceLibs.find(instance => lib().title.includes(instance));
  // Return the current library name minus the generic library to get the instance;
  return lib().title.split(` ${libMatch}`)[0];
}

export default getInstance;
