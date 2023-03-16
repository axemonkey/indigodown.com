var quotes = [
  'We will Executive Rock you',
  'For those about to Executive Rock...',
  'Executive Rock you like a hurricane',
  'Don\'t stop the Executive Rock',
  'It\'s only Executive Rock N\' Roll',
  'Jailhouse Executive Rock',
  'Love on the Executive Rocks',
  'Raise your hands to Executive Rock',
  'Executive Rocket to Earth',
  'Get your Executive Rocks off'
];

module.exports = {
  randomQuote: function(){
    var n = quotes.length,
      r = Math.floor(Math.random() * n),
      q = quotes[r];

    return q;
  }
};
