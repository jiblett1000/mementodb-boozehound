// Calculate final volume.

function cocktailFinalVolume() {
  const initialVolume = entry().field('Initial Volume (oz)');
  const dilution = entry().field('Dilution %') / 100;

  entry().set('Final Volume (oz)', (initialVolume * dilution) + initialVolume);
}
