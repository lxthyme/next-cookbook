export default (req, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  }).then(() => {
    res.status(200).json(result)
  })
}

const sign_lists = [
  {
    year: '2020',
    month: '04',
    day: '13',
    sign_status: 2,
    sign_value: 1,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 0,
  },
  {
    year: '2020',
    month: '04',
    day: '14',
    sign_status: 2,
    sign_value: 1,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 0,
  },
  {
    year: '2020',
    month: '04',
    day: '15',
    sign_status: 1,
    sign_value: 2,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 0,
  },
  {
    year: '2020',
    month: '04',
    day: '16',
    sign_status: 2,
    sign_value: 3,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 1,
  },
  {
    year: '2020',
    month: '04',
    day: '17',
    sign_status: 2,
    sign_value: 4,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 0,
  },
  {
    year: '2020',
    month: '04',
    day: '18',
    sign_status: 2,
    sign_value: 5,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 0,
  },
  {
    year: '2020',
    month: '04',
    day: '19',
    sign_status: 2,
    sign_value: 5,
    sign_product_id: 0,
    extra_value: 0,
    is_current_date: 0,
  },
]

const sign_rule_text = `“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days. Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away. If truth be told, (after reading random excerpts from “The Itty Bitty Bunkum Book About Life, the Universe & Practically Everything Under the Sun Not To Mention Stuff Going On In Remote Galaxies), I was basically delirious. According to its noted author, Dr. Jarn Leffer, “IT is a ‘must-see’ for those with little time on their hands & a passionate interest in Innocuous Things.” Most linear thinkers have a great deal of difficulty even comprehending why on earth someone in their “right mind” would be interested in visiting a planet called “IT”. Not being a linear thinker with an investment in the “right” answer, I didn’t give a hoot. After all, what does one (who walks on water & listens to miffed mortals all day long) do for a frigging night off, now I ask you? As planets go, “IT” is a ho-hum celestial pit-stop with perhaps one exception. the welcome notice that reads, “Cosmic Cowboys – Welcome to the furthest unexplored outreaches of the Galaxy . Home to the Flop Fairy & Oodles of Gadflies!” “IT” is populated by colonies of giggling, green grasshoppers . What else would you expect to inhabit a far-flung, fantasy-challenged hellhole like this? But, what made “IT” strictly speaking a strange place was the fact that the inhabitants munch on green, biodegradable garbage bags for fun. Lacking masticating capabilities, the gadflies process their food by vigorously jumping up & down on it. No wonder they have no need for fast-food franchises, strip malls or landfills! To put “IT” bluntly, life on “IT” is shy of a tittynope*. The jolly green grasshoppers & the carefully manicured green fairways with sand traps as far as the eye can see certainly make for an utterly harmless world. Regrettably, without a pair of golf clubs, a dimpled white ball, & the notion that 19th hole even exists on this planet — “IT” is about as fun as bag of toads! Anyway, I picked up this picturesque postcard of the blessed ballyhooing buglugs. they look perfectly happy but don’t be deceived. In reality, they are a gang of glad-handing grasshoppers. they don’t play golf, eat burgers, or drink beer — & none can frost a rock! Come to think of it, apart from the company of bugs & the elusive flop fairy, this pathetic planet has precious little going for IT!! Life Lesson 42: Remember to talk to your travel agent before ever embarking on a flight of fancy to a planet called “IT” in a galaxy named “Have-a-Nice-Day”!! __________ If you need to know what those green, glad-handing grasshoppers from “IT” look like — ask any four-year old, or failing that request some help from a Flying Saucer Club member. *”Tittynope” for you whiffling word-peckers means “a small quantity of anything left over”.`

const result = {
  code: 10000,
  msg: '',
  tips: '',
  runtime: 0.12209391593933105,
  data: {
    current_day: {
      year: '2020',
      month: '06',
      day: '03',
    },
    tips_missed: {
      template: 'Missed {%index_1%} days in the last 7 days',
      values: [
        {
          k: '{%index_1%}',
          v: '233',
          color: '#d8d8d8',
        },
      ],
    },
    tips_checked: {
      template: 'Hash been checked in for {%index_1%} consecutive days!',
      values: [
        {
          k: '{%index_1%}',
          v: '666',
          color: '#d8d8d8',
        },
      ],
    },
    sign_rule_text,
    today_is_sign: 1,
    retrieve_nums: 3,
    sign_lists,
  },
}
