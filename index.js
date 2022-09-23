const pigTypes = {
  breeds : ['hampshire', 'york', 'duroc', 'american landrace'],
  pickOne() {
    const { breeds } = this;
    const idx = Math.floor(Math.random() * breeds.length);
    return breeds[idx]
  },
  start() {
    this.timerID = setInterval(() => {
      console.log(this.pickOne())
    }, 1000)
  },
  stop() {
    clearInterval(this.timerID)
  }
}

