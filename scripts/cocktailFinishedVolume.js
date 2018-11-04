// Calculate finished volume.

function cocktailFinishedVolume() {
  const initialVolume = field('Initial Volume (oz)');
  const dilution = field('Dilution %');

  return (initialVolume * dilution) + initialVolume;
}
