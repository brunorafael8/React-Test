const EpsApi = {
  eps: [
    {
      'id': 0,
      'url': 'https://upload.wikimedia.org/wikipedia/en/c/c9/Hybrid_Theory_EP.jpg',
			'title': 'Hybrid Theory EP',
			'released': 'May 1, 1999',
			'description': 'Hybrid Theory is the first EP by Hybrid Theory, a previous name of the band Linkin Park. The album was recorded and self-released in May 1, 1999 (although the band has not confirmed or denied this, the date has stuck) through Mix Media.'
		},    
		{
      'id': 1,
      'url': 'https://upload.wikimedia.org/wikipedia/en/c/c9/Linkin_park_hybrid_theory.jpg',
			'title': 'Hybrid Theory',
			'released': 'October 24, 2000',
			'description': 'Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000 through Warner Bros. Records. The album was a huge commercial success.'
		},
		{
      'id': 2,
      'url': 'https://upload.wikimedia.org/wikipedia/en/6/64/MeteoraLP.jpg',
			'title': 'Meteora',
			'released': 'March 25, 2003',
			'description': 'Meteora is the second studio album by American rock band Linkin Park. It was released on March 25, 2003 through Warner Bros. Records, following Reanimation, a collaboration album which featured remixes of songs included on their debut studio album Hybrid Theory.'
		},
		{
      'id': 3,
      'url': 'https://upload.wikimedia.org/wikipedia/en/a/a2/LP-LiveInTexas.jpg',
			'title': 'Live in Texas',
			'released': 'November 18, 2003',
			'description': 'Live in Texas is the first live album and third DVD of American nu metal band Linkin Park, originally released on November 18, 2003. The bands main setlist includes songs from their studio albums Hybrid Theory and Meteora, as well as one song from their remix album Reanimation.'
		},		
		{
      'id': 4,
      'url': 'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg',
			'title': 'Minutes to Midnight',
			'released': 'May 14, 2007',
			'description': 'Minutes to Midnight is the third studio album by American rock band Linkin Park, released on May 14, 2007, through Warner Bros. Records. The album was produced by Mike Shinoda and Rick Rubin.'
		},
		{
      'id': 5,
      'url': 'https://upload.wikimedia.org/wikipedia/en/a/af/A_Thousand_Suns_Cover2.jpg',
			'title': 'A Thousand Suns',
			'released': 'September 8, 2010',
			'description': 'A Thousand Suns is the fourth studio album by American rock band Linkin Park. It was released on September 8, 2010, by Warner Bros. Records. The album was written by the band and was produced by Linkin Park vocalist Mike Shinoda and Rick Rubin.'
		},		
		{
      'id': 6,
      'url': 'https://upload.wikimedia.org/wikipedia/en/c/c9/Linkin_Park_-_Living_Things.jpg',
			'title': 'Living Thingst',
			'released': '	June 20, 2012',
			'description': 'Living Things is the fifth studio album by American rock band Linkin Park. It was released under Warner Bros. Records and Machine Shop Recordings on June 20, 2012, in Japan, and throughout the rest of the world during the following week.'
		},
	],
	all: function() {return this.eps},
	get: function(id) {
		const RipChester = ep => ep.id === id
		return this.eps.find(RipChester)
	}
}
export default EpsApi
