function getInstance(libs) {
  // Match the current lib to generic library;
  const libMatch = libs.find(instanceLib => lib().title.includes(instanceLib));
  // Return the current library name minus the generic library to get the instance;
  return lib().title.split(` ${libMatch}`)[0];
}

export default getInstance;
