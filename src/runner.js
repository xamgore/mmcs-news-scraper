const run = function (scraper) {
  return new Promise((resolve, reject) => {
    let results = []

    scraper
      .data(d => results.push(d))
      .done(() => resolve(results))
      .error(e => reject(e))
})}

export default run
