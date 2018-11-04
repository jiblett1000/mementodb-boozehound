// Calculate COGS %;

function posCogsPercentage() {
  (field('Cost') / (field('Price') * 0.915)).toFixed(2);
}
