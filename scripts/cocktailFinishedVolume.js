// Calculate finished volume.

function cocktailFinishedVolume() {
  const initialVolume = entry().field('Initial Volume (oz)');
  const dilution = entry().field('Dilution %');

  entry().set('Finished Volume (oz)', (initialVolume * dilution) + initialVolume);
}
