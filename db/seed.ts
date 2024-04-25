import { db, Tourdate, Release } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Tourdate).values([
    {
      date: new Date("2002-02-16"),
      venue: "The Blue Posts",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "stylus club night w/ the visitors",
    },
    {
      date: new Date("2002-05-11"),
      venue: "The Winchester Club",
      city: "Glasgow",
      country: "GB-SCT",
      url: "",
      other:
        "guest drummer: travis miles, travelling companion: will fowler w/ california snow story",
    },
    {
      date: new Date("2002-06-21"),
      venue: "Razzmatazz",
      city: "Barcelona",
      country: "ES",
      url: "",
      other: "w/ pedro paramo, annika dj's",
    },
    {
      date: new Date("2002-07-25"),
      venue: "Mitt Bästa Liv",
      city: "Kalmar",
      country: "SE",
      url: "",
      other: "",
    },
    {
      date: new Date("2002-07-27"),
      venue: "Cafe Mix",
      city: "Stockholm",
      country: "SE",
      url: "",
      other: "w/ tender trap, sportique, aerospace & freeloan investments",
    },
    {
      date: new Date("2002-08-24"),
      venue: "Rough Trade's Rota | Notting Hill Arts Club",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "w/ the would-be-goods, the windmills, lovejoy",
    },
    {
      date: new Date("2002-09-28"),
      venue: "Bush Hall",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        "chickfactor black & white ball w/ camera obscura, the montgolfier brothers, would-be-goods",
    },
    {
      date: new Date("2002-10-25"),
      venue: "Fez",
      city: "New York",
      country: "US",
      url: "",
      other: "chickfactor black & white ball",
    },
    {
      date: new Date("2002-10-28"),
      venue: "The Fire",
      city: "Philadelphia, PA",
      country: "US",
      url: "",
      other: "w/ the snow fairies + ?",
    },
    {
      date: new Date("2002-10-29"),
      venue: "9:30 Club",
      city: "Washington, DC",
      country: "US",
      url: "",
      other: "w/ the would-be-goods, glo-worm, future bible heroes",
    },
    {
      date: new Date("2003-03-08"),
      venue: "?",
      city: "Leicester",
      country: "GB-ENG",
      url: "",
      other: "secret show!",
    },
    {
      date: new Date("2003-04-06"),
      venue: "Betsey Trotwood",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "guest drummer: rudee w/ the cut outs",
    },
    {
      date: new Date("2003-04-17"),
      venue: "Sauna in the hills and lakes",
      city: "Milan",
      country: "IT",
      url: "",
      other: "guest drummer for all italian shows: rudee w/ prague",
    },
    {
      date: new Date("2003-04-18"),
      venue: "Milk",
      city: "Genoa",
      country: "IT",
      url: "",
      other: "w/ prague",
    },
    {
      date: new Date("2003-04-20"),
      venue: "32cc",
      city: "Rome",
      country: "IT",
      url: "",
      other: "w/ prague",
    },
    {
      date: new Date("2003-05-03"),
      venue: "Moment: Yoshimitsu!",
      city: "Stockholm",
      country: "SE",
      url: "",
      other: "w/ aerospace, the legends",
    },
    {
      date: new Date("2003-05-24"),
      venue: "Primavera Sounds Festival",
      city: "Barcelona",
      country: "ES",
      url: "",
      other: "",
    },
    {
      date: new Date("2003-06-14"),
      venue: "Green Angels",
      city: "Borough, London",
      country: "GB-ENG",
      url: "",
      other: "laura's party w/ team nerve, prague",
    },
    {
      date: new Date("2003-07-08"),
      venue: "The Garage",
      city: "Los Angeles, CA",
      country: "US",
      url: "",
      other: "w/ frenchmen, evening lights, aerospace +",
    },
    {
      date: new Date("2003-07-09"),
      venue: "Jojo",
      city: "Santa Barbara, CA",
      country: "US",
      url: "",
      other: "w/ frenchmen, evening lights",
    },
    {
      date: new Date("2003-07-10"),
      venue: "Bottom of the Hill",
      city: "San Francisco, CA",
      country: "US",
      url: "",
      other: "pop holiday 2003!",
    },
    {
      date: new Date("2003-07-15"),
      venue: "Blackbird",
      city: "Portland, OR",
      country: "US",
      url: "",
      other: "w/ frenchmen, aerospace, evening lights and radio dept",
    },
    {
      date: new Date("2003-07-16"),
      venue: "Chop Suey",
      city: "Seattle, WA",
      country: "US",
      url: "",
      other: "w/ radio dept",
    },
    {
      date: new Date("2003-07-19"),
      venue: "Nancy's garage",
      city: "Williamsburg, NY",
      country: "US",
      url: "",
      other: "",
    },
    {
      date: new Date("2003-09-23"),
      venue: "Water Rats",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "w/ camera obscura, sister vanilla",
    },
    {
      date: new Date("2003-10-04"),
      venue: "Community Centre",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "w/ team nerve, the pirate band",
    },
    {
      date: new Date("2003-10-24"),
      venue: "Barbarella",
      city: "Madrid",
      country: "ES",
      url: "",
      other: "w/ lucksmiths, zipper, airport girl",
    },
    {
      date: new Date("2003-10-25"),
      venue: "Radio 3 (broadcast)",
      city: "Madrid",
      country: "ES",
      url: "",
      other: "live performance on the julio ruiz radio show.",
    },
    {
      date: new Date("2003-10-25"),
      venue: "Sala Paladium",
      city: "Albacete",
      country: "ES",
      url: "",
      other: "i otono pop festival w/ universal circus, cecilia ann",
    },
    {
      date: new Date("2004-02-21"),
      venue: "Starke Adolf",
      city: "Gothenburg",
      country: "SE",
      url: "",
      other:
        'w/ eisenhower & richard reagh',
    },
    {
      date: new Date("2004-02-29"),
      venue: "50 Watts of Power!",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'next to highbury & islington tube station w/ <a href="https://lostandlonesome.com.au"  rel="noopener">the mosquitoes</a> (u.s.), the cut-outs',
    },
    {
      date: new Date("2004-03-12"),
      venue: "Barbarella",
      city: "Madrid",
      country: "ES",
      url: "",
      other: '',
    },
    {
      date: new Date("2004-04-21"),
      venue: "Arts Cafe",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'a track & field event w/ aberfeldy (new rough trade signings)',
    },
    {
      date: new Date("2004-04-30"),
      venue: "Corner Hotel",
      city: "Melbourne",
      country: "AU",
      url: "",
      other: "w/ the lucksmiths, smallgoods, mid-State orange",
    },
    {
      date: new Date("2004-05-01"),
      venue: "Tilley's",
      city: "Canberra",
      country: "AU",
      url: "",
      other: "w/ the lucksmiths",
    },
    {
      date: new Date("2004-05-05"),
      venue: "The Hodg Lodg",
      city: "Melbourne",
      country: "AU",
      url: "",
      other: "w/ tracey read & guy from sleepy township",
    },
    {
      date: new Date("2004-05-06"),
      venue: "The Troubadour",
      city: "Brisbane",
      country: "AU",
      url: "",
      other: "w/ the lucksmiths",
    },
    {
      date: new Date("2004-05-07"),
      venue: "The Annandale",
      city: "Sydney",
      country: "AU",
      url: "",
      other: "w/ the lucksmiths, smallgoods, the zebras",
    },
    {
      date: new Date("2004-05-08"),
      venue: "The Clarendon",
      city: "Katoomba",
      country: "AU",
      url: "",
      other: "w/ darren hanlon",
    },
    {
      date: new Date("2004-06-12"),
      venue: "The Winchester Club",
      city: "Glasgow",
      country: "GB-SCT",
      url: "",
      other: "w/ language of flowers",
    },
    {
      date: new Date("2004-07-16"),
      venue: "Trädgården",
      city: "Stockholm",
      country: "SE",
      url: "",
      other: "patsy soundsystem club w/ the honeydrips",
    },
    {
      date: new Date("2004-07-21"),
      venue: "Betsey Trotwood",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "w/ THE FRENCHMEN & the cut outs",
    },
    {
      date: new Date("2004-07-22"),
      venue: "The Red Room @ the rescue rooms",
      city: "Nottingham",
      country: "GB-ENG",
      url: "www.rescuerooms.com",
      other:
        "masonic place, goldsmiths street. ng1 5gg w/ the frenchmen, johnny domino, the cut outs",
    },
    {
      date: new Date("2004-07-23"),
      venue: "Classic Rock Bar",
      city: "Sheffield",
      country: "GB-ENG",
      url: "",
      other:
        "144 ecclesall road, s11 8jb w/ the frenchmen, the cut outs, velodrome 2000",
    },
    {
      date: new Date("2004-07-24"),
      venue: "The Fenton",
      city: "Leeds",
      country: "GB-ENG",
      url: "",
      other:
        "161 woodhouse lane,.ls2 3ed w/ the frenchmen, the cut outs, the seven inches",
    },
    {
      date: new Date("2004-07-28"),
      venue: "Bitter Scene",
      city: "Chelmsford",
      country: "GB-ENG",
      url: "www.bitterscene.co.uk",
      other:
        "w/ the frenchmen, the cut outs. www.bitterscene.co.uk. doors 8:30pm.",
    },
    {
      date: new Date("2004-09-11"),
      venue: "Musikcaféen",
      city: "Aarhus",
      country: "DK",
      url: "",
      other:
        'www.poprevolution.dk w/ the clientele, radio dept, comet gain, action biker &amp; more',
    },
    {
      date: new Date("2004-11-12"),
      venue: "Club Indigo",
      city: "Lund",
      country: "SE",
      url: "",
      other:
        'w/ handsome train',
    },
    {
      date: new Date("2004-11-13"),
      venue: "Café Riga, Istedgade",
      city: "Copenhagen",
      country: "DK",
      url: "",
      other:
        'w/ ampel',
    },
    {
      date: new Date("2004-12-10"),
      venue: "Bush Hall",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'chickfactor\'s <a href="https://www.chickfactor.com" rel="noopener">mon gala papillons</a>  w/ television personalities, stevie jackson (from belle & sebastian),  mascott',
    },
    {
      date: new Date("2005-01-21"),
      venue: "club MAD",
      city: "Athens",
      country: "GR",
      url: "",
      other:
        '<a href="http://www.friendsoftheheroes.co.uk/pipas/" rel="noopener">for more info on the show</a>. persefonis 61 & dekeleon 12, gazi. tel 2103454604. w/ <a  rel="noopener"  href="http://www.friendsoftheheroes.co.uk/reviews/music/week12.html">the occasional flickers</a>',
    },
    {
      date: new Date("2005-05-05"),
      venue: "Beat Kitchen",
      city: "Chicago, IL",
      country: "US",
      url: "",
      other:
        "21+ (i imagine) w/ the lucksmiths, icicles, the scotland yard gospel choir",
    },
    {
      date: new Date("2005-05-06"),
      venue: "Schuler Books & Music",
      city: "Grand Rapids, MI",
      country: "US",
      url: "",
      other:
        "all ages, FREE! 7:30pm, 2660 28th Street w/ the lucksmiths, icicles",
    },
    {
      date: new Date("2005-05-07"),
      venue: "Pa's Lounge",
      city: "Somerville, MA",
      country: "US",
      url: "http://www.thecritique.org/schedule.html",
      other:
        '21+ w/ the lucksmiths, ladybug transistor (<a href="http://www.thecritique.org/"  rel="noopener">the critique of pure reason</a> night)',
    },
    {
      date: new Date("2005-05-08"),
      venue: "Knitting Factory",
      city: "New York City",
      country: "US",
      url: "http://www.knittingfactory.com/calendar/event_descrip.cfm?event_num=51591&room=1&location=1)",
      other:
        "all ages (i think) w/ the lucksmiths, ladybug transistor, in interview",
    },
    {
      date: new Date("2005-05-09"),
      venue: "Philadelphia Ethical Society",
      city: "Philadelphia, PA",
      country: "US",
      url: "",
      other:
        "19th street & rittenhouse square VENUE CHANGE! all ages, doors 7pm w/ the lucksmiths, ladybug transistor, the snow fairies",
    },
    {
      date: new Date("2005-05-10"),
      venue: "DC9",
      city: "Washington, DC",
      country: "US",
      url: "",
      other: "21+ w/ the lucksmiths, ladybug transistor, lil' hospital",
    },
    {
      date: new Date("2005-06-11"),
      venue: "free 'FREE' free PUNK ROCK",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        "benefit for jeff 'free' luers. 4-9pm. the pullens centre. 184 crampton street. london. se17. just below elephant and castle.  w/ butchers boy (ex-team nerve) & rachelAPP. zine stall. cofeee. tea. tape swap box... and more...",
    },
    {
      date: new Date("2005-08-26"),
      venue: "Landet",
      city: "Stockholm",
      country: "SE",
      url: "",
      other:
        'w/ mark monnone (lucksmiths). show set up by <a href="http://www.bedroomrec.com/club.htm">bedroom</a> and <a href="http://www.svenskamusikklubben.se/home.htm"  rel="noopener">svenska musikklubben</a>.',
    },
    {
      date: new Date("2005-08-31"),
      venue: "Bush Hall",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        '<a href="https://www.theclientele.co.uk/"  rel="noopener">clientele</a> record release show! ',
    },
    {
      date: new Date("2005-10-02"),
      venue: "The Light Programme",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'the lion, 132 church st, stoke newington, london N16 w/ <a href="http://www.thelucksmiths.com.au/">mark monnone</a> (with help from <a href="http://www.darrenhanlon.com">darren hanlon</a>) & <a href="http://www.michaelmasnet.com">michaelmas</a>. we\'re on at 9pm. mark @ 8pm. FREE!',
    },
    {
      date: new Date("2005-10-22"),
      venue: "Kamelon",
      city: "Bergen",
      country: "NO",
      url: "",
      other:
        '"some gorgeous accident" festival w/ <a href="http://www.lovedancepop.com"  rel="noopener">love dance</a>, <a href="http://www.galantrecords.com"  rel="noopener">professor pez</a>, lovejoy',
    },
    {
      date: new Date("2005-11-03"),
      venue: "Betsey Trotwood",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'an <a href="http://www.upsettherhythm.co.uk/"  rel="noopener">upset the rhythm</a> event w/ <a href="http://www.halfhandedcloud.com/"  rel="noopener">half-handed cloud</a> & <a href="http://www.sufjan.com/">sufjan stevens</a>. tickets from <a href="http://www.wegottickets.com/event/7456"  rel="noopener">wegottickets.com</a>.',
    },
    {
      date: new Date("2005-11-05"),
      venue: "Schilleroper",
      city: "Hamburg",
      country: "DE",
      url: "",
      other:
        '<a href="http://www.threecheers.de"  rel="noopener">three cheers for our side festival</a> w/ Mark Monnone (The Lucksmiths), Flo Fernandez and Roy Moller',
    },
    {
      date: new Date("2005-12-05"),
      venue: "The Quad @ London School of Economics",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'go native! christmas party w/ <a href="http://www.thechap.org"  rel="noopener">the chap</a>, <a href="http://www.myspace.com/leilamusic"  rel="noopener">leila music</a>',
    },
    {
      date: new Date("2006-04-01"),
      venue: "The Cakeshop",
      city: "New York",
      country: "US",
      url: "",
      other:
        "we jumped on a show with a lot of other bands (human television,unlove,eliot lip, burnside project). UPDATE - we're on at 8pm-ish!!!!",
    },
    {
      date: new Date("2006-08-12"),
      venue: "Emmaboda festival",
      city: "Emmaboda",
      country: "SE",
      url: "",
      other:
        "w/ camera obscura, the magic numbers, chicks on speed, the pipettes, still flyin' and loads more. wow!",
    },
    {
      date: new Date("2006-08-17"),
      venue: "The Progress Bar",
      city: "London",
      country: "GB-ENG",
      url: "",
      other:
        'thanks be to <a href="http://www.spiralscratchpop.com/"  rel="noopener">spiral scratch</a> w/ <a href="http://www.myspace.com/shimuracurves"  rel="noopener">shimura curves</a> & h-bird. doors 8pm.',
    },
    {
      date: new Date("2006-10-19"),
      venue: "Tritone",
      city: "Philadelphia",
      country: "US",
      url: "",
      other:
        'an <a href="http://myspace.com/iwasateenagepopaddict"  rel="noopener">i was a teenage pop addict</a> night w/ <a href="myspace.com/maplerabbit"  rel="noopener">maple rabbit</a> (21+)',
    },
    {
      date: new Date("2006-10-26"),
      venue: "Union Hall",
      city: "Brooklyn",
      country: "US",
      url: "",
      other:
        'w/ <a href="http://www.myspace.com/sissypopband"  rel="noopener">the ballet</a> & <a href="http://www.myspace.com/oppenheimer"  rel="noopener">oppenheimier</a>',
    },
    {
      date: new Date("2006-11-15"),
      venue: "Tokyo vs Osaka @ Street",
      city: "Stockholm",
      country: "SE",
      url: "",
      other:
        '<a href="http://www.osakavstokyo.com/"  rel="noopener">tokyo vs oaska</a> web site.',
    },
    {
      date: new Date("2006-11-16"),
      venue: "Teatervallen",
      city: "Kalmar",
      country: "SE",
      url: "",
      other: "",
    },
    {
      date: new Date("2006-11-17"),
      venue: "Retro",
      city: "Malmö",
      country: "SE",
      url: "",
      other:
        'a <a href="http://www.youcanthide.info/"  rel="noopener">you can\'t hide your love forever</a>  night!',
    },
    {
      date: new Date("2006-11-18"),
      venue: "Cosy Den",
      city: "Gothenburg",
      country: "SE",
      url: "",
      other:
        'w/ <a href="http://www.sibiria.se"  rel="noopener">sibiria</a> and <a href="http://www.bromander.nu"  rel="noopener">bromander</a>',
    },
    {
      date: new Date("2006-11-20"),
      venue: "Kastelsvej 44",
      city: "Copenhagen",
      country: "DK",
      url: "",
      other:
        'w/ the awesome <a href="http://ampel.dk"  rel="noopener"><strong>ampel</strong></a>',
    },
    {
      date: new Date("2006-11-21"),
      venue: "[venue unknown]",
      city: "Varberg",
      country: "SE",
      url: "",
      other: "",
    },
    {
      date: new Date("2006-11-22"),
      venue: "Semifinal",
      city: "Helsinki",
      country: "FI",
      url: "",
      other:
        'w/ <a href="http://www.harryhunks.com/"  rel="noopener">harry hunks</a>',
    },
    {
      date: new Date("2006-11-23"),
      venue: "Von Krahl",
      city: "Tallinn",
      country: "EE",
      url: "",
      other:
        '<a href="http://www.vonkrahl.ee/">www.vonkrahl.ee</a> w/ <a href="http://www.piafraus.com/"  rel="noopener">pia fraus</a> & <a href="http://harryhunks.com"  rel="noopener">harry hunks</a>',
    },
    {
      date: new Date("2006-11-24"),
      venue: "Rock n' Roll",
      city: "Tartu",
      country: "EE",
      url: "",
      other:
        '<a href="http://www.rocknroll.ee/"  rel="noopener">www.rocknroll.ee</a> w/ <a href="http://www.piafraus.com/"  rel="noopener">pia fraus</a>  & <a href="http://harryhunks.com"  rel="noopener">harry hunks</a>.',
    },
    {
      date: new Date("2006-11-25"),
      venue: "Dynamo",
      city: "Turku",
      country: "FI",
      url: "",
      other:
        '<a href="http://www.myspace.com/lesypersoundclub"  rel="noopener">les yper sound club night</a> w/ <a href="http://www.myspace.com/actionbiker">action biker</a>. <a href="http://www.dynamoklubi.com"  rel="noopener">dynamo web site</a>.',
    },
    {
      date: new Date("2006-11-26"),
      venue: "Prinzenbar",
      city: "Hamburg",
      country: "DE",
      url: "",
      other:
        'w/ <a href="http://www.myspace.com/flofernandeztherockband"  rel="noopener">flo fernandez</a>',
    },
    {
      date: new Date("2006-11-28"),
      venue: "Staubsauger",
      city: "Leipzig",
      country: "DE",
      url: "",
      other: "",
    },
    {
      date: new Date("2006-11-29"),
      venue: "Magnet Club",
      city: "Berlin",
      country: "DE",
      url: "",
      other: "",
    },
    {
      date: new Date("2006-12-01"),
      venue: "Barbarella",
      city: "Madrid",
      country: "ES",
      url: "",
      other:
        'w/ <strong>alasdair</strong> from <a href="https://www.theclientele.co.uk/" rel="noopener">the clientele</a>',
    },
    {
      date: new Date("2006-12-02"),
      venue: "Bar Latino",
      city: "Utrera (Sevilla)",
      country: "ES",
      url: "",
      other:
        'w/ <strong>alasdair</strong> from <a href="https://www.theclientele.co.uk/" rel="noopener">the clientele</a>!',
    },
    {
      date: new Date("2006-12-04"),
      venue: "Sala Castello",
      city: "Barcelona",
      country: "ES",
      url: "",
      other:
        "w/ amy linton from <strong>aisler set</strong> (+ a bit of gary from <strong>ladybug transistor</strong>!) & alasdair from the clientele",
    },
    {
      date: new Date("2007-05-17"),
      venue: "Rickshaw Stop",
      city: "San Francisco, CA",
      country: "US",
      url: "",
      other:
        'all ages! w/ <a href="http://myspace.com/landofillearthquakes" rel="noopener">land of ill earthquakes</a> & bye bye blackbirds.',
    },
    {
      date: new Date("2007-05-19"),
      venue: "Mustang Club",
      city: "Modesto, CA",
      country: "US",
      url: "",
      other:
        '21+ w/ <a href="http://myspace.com/landofillearthquakes">land of ill earthquakes</a>, <a href="www.myspace.com/addaline209">addaline</a>, on petal, judith and holofernes. <a href="www.myspace.com/themustangclub" rel="noopener">mustang club web site</a>',
    },
    {
      date: new Date("2007-05-20"),
      venue: "Press Club",
      city: "Sacramento, CA",
      country: "US",
      url: "",
      other:
        '<a href="http://www.myspace.com/recordclubsacto">record club event</a> w/ <a href="http://myspace.com/landofillearthquakes" rel="noopener">land of ill earthquakes</a>, baby grand & buildings breeding',
    },
    {
      date: new Date("2007-05-21"),
      venue: "Biko garage",
      city: "Isla Vista, CA",
      country: "US",
      url: "",
      other:
        'all ages! w/ <a href="http://myspace.com/landofillearthquakes" rel="noopener">land of ill earthquakes</a>',
    },
    {
      date: new Date("2007-05-22"),
      venue: "Ekinspek",
      city: "Walnut, CA",
      country: "US",
      url: "",
      other:
        "all ages. 3 dollar donations. house show! heartbreakingly last show with <strong>land of ill earthquakes</strong>! nooOO!",
    },
    {
      date: new Date("2007-05-24"),
      venue: "Knitting Factory",
      city: "Los Angeles, CA",
      country: "US",
      url: "",
      other:
        'w/ <a href="https://www.theclientele.co.uk" rel="noopener">the clientele</a>!',
    },
    {
      date: new Date("2007-05-27"),
      venue: "Luna Lounge",
      city: "Brooklyn, NY",
      country: "US",
      url: "",
      other:
        '<a href="http://www.myspace.com/nycpopfest" rel="noopener">nyc pop fest!</a> w/ <a rel="noopener" href="http://www.causeco-motion.com">cause co-motion</a> (a longstanding dream of ours to play with them!!) and others.',
    },
    {
      date: new Date("2007-06-05"),
      venue: "Soundfix Records",
      city: "Brooklyn, NY",
      country: "US",
      url: "",
      other:
        "san fadyl memorial show and benefit. all proceeds go to san's wife and baby w/ ladybug transistor, sasha bell (essex green), amy linton (aisler set), joe mcginty (baby steps), gary thomas (individual fruit pie), ed rogers (bedsit poets) and more. ",
    },
    {
      date: new Date("2007-06-08"),
      venue: "Bowery Ballroom",
      city: "New York City",
      country: "US",
      url: "",
      other:
        'w/ <a href="https://www.theclientele.co.uk" rel="noopener">the clientele</a>',
    },
    {
      date: new Date("2007-06-11"),
      venue: "Union Hall",
      city: "Brooklyn, NY",
      country: "US",
      url: "",
      other:
        '<a href="https://theladybugtransistor.bandcamp.com/music" target="_blank" title="the ladybug transistor">the ladybug transistor</a>  new record release party, with solo set by alasdair maclean of <a href="https://www.theclientele.co.uk" rel="noopener">the clientele</a> !',
    },
    {
      date: new Date("2008-07-19"),
      venue: "Rip It Up",
      city: "Saffle",
      country: "SE",
      url: "",
      other: ""
    },
    {
      date: new Date("2012-04-11"),
      venue: "Bell House",
      city: "Brooklyn, NY",
      country: "US",
      url: "",
      other: "chickfactor 2012 - for the love of pop - night 2",
    },
    {
      date: new Date("2012-11-18"),
      venue: "The Lexington",
      city: "London",
      country: "GB-ENG",
      url: "",
      other: "chickfactor / Hangover Lounge All Dayer",
    },
  ]);

  await db.insert(Release).values([
    {
      date: new Date("2001-07-01"),
      title: "Chunnel Autumnal",
      cat: "llc02",
      hasImage: true,
      format: 1,
      label: "Long Lost Cousin",
      tracklisting: `
1. tout va bien
2. don't tell me that
3. wells street
4. moss oval
5. amsterdam
6. bye bye
7. the bobby
8. st. pancras
`,
      notes:
        "",
    },
    {
      date: new Date("2002-02-16"),
      title: "A Short Film About Sleeping",
      cat: "mat035",
      hasImage: true,
      format: 3,
      label: "Matinée Recordings",
      tracklisting: `
1. a short film about sleeping
2. troublesome
3. fingerprints
    `
    },
    {
      date: new Date("2002-08-24"),
      title: "v/a The Matinée Summer Splash",
      cat: "mat040",
      hasImage: true,
      format: 6,
      label: "Matinée Recordings",
      tracklisting: "6. Cruel &amp; Unusual",
      notes:
        "w/ harper lee, the would be goods,<br />sportique, airport girl, lovejoy and more.",
    },
    {
      date: new Date("2002-10-01"),
      title: "A Cat Escaped",
      cat: "matcd021",
      hasImage: true,
      format: 4,
      label: "Matinée Recordings",
      tracklisting: `
  1. what nobody does
  2. the conversation
  3. barbapapa
  4. rock and/or roll
  5. old kent road
  6. the witches
  7. cruel & unusual
  8. a cat escaped
  9. emblematic
  10. [run run run](https://web.archive.org/web/20181017072814/https://pipasforthepeople.com/videos/run-run-run)
`
    },
    {
      date: new Date("2003-10-01"),
      title: "The Matinée Autumn Assortment",
      cat: "mat051",
      hasImage: true,
      format: 6,
      label: "Matinée Recordings",
      tracklisting:
        "9. don't remix (exclusively repurposed version of 'don't walk' from golden square)",
      notes:
        "compilation w/ would-be-goods, harper lee, the pines and other matin&eacute;e stars",
    },
    {
      date: new Date("2003-07-01"),
      title: "Matinée 50",
      cat: "mat050",
      hasImage: true,
      format: 6,
      label: "Matinée Recordings",
      tracklisting: "7. you kill me (harper lee cover)",
    },
    {
      date: new Date("2002-08-01"),
      title: "v/a all’s fair in love and chickfactor ",
      cat: "enchante005",
      hasImage: true,
      format: 6,
      label: "Enchanté Records",
      tracklisting: "1. Wells Street",
    },
    {
      date: new Date("2004-02-20"),
      title: "Bitter Club EP",
      cat: "mat052",
      hasImage: true,
      format: 2,
      label: "Matinée Recordings",
      tracklisting: `
  1. Mental
  2. Bitter Club
  3. Sixten
  4. Minilife
  5. Jean C
  6. South (bend-able mix by pandatone)
      `,
      notes:
        "Release date around our birthdays somewhere mid-late February 2004!",
    },
    {
      date: new Date("2003-08-01"),
      title: "Golden Square",
      cat: "annika04",
      hasImage: true,
      format: 4,
      label: "Annika Records",
      tracklisting:
        `
  1. pidg's brew
  2. no suspires más
  3. don't walk
  4. hard times
  5. golden square
  6. south
  7. hiding in the park
  8. book launch
  9. it's too soon
        `
    },
    {
      date: new Date("2007-05-17"),
      title: "Mix For The Occupation",
      cat: "llc05",
      hasImage: true,
      format: 2,
      tracklisting: `
1. the bowling alley
2. it's wednesday
3. mix for the occupation
      `,
      label: "Long Lost Cousin",
    },
    {
      date: new Date("2004-01-01"),
      title:
        "Romantic and Square is Hip and Aware (A Matin&eacute;e Tribute to The Smiths)",
      cat: "matcd030",
      hasImage: true,
      format: 6,
      label: "Matinée Recordings",
      tracklisting: "5. this night has opened my eyes",
    },
    {
      date: new Date("2004-07-04"),
      title: "Flipside - A Candle Records Collection",
      cat: "candle84",
      hasImage: true,
      format: 6,
      label: '<a href="https://www.candlerecords.com.au">Candle Records</a>',
      tracklisting: "9. The Lucksmiths - How To Tie A Tie - Remixed by Pipas",
    },
    {
      date: new Date("2004-12-01"),
      title: "The Matinée Winter Warmer",
      cat: "mat055",
      hasImage: true,
      format: 6,
      label: "Matinée Recordings",
      tracklisting: "3. boxes",
    },
    {
      date: new Date("2005-01-01"),
      title: "Chunnel Autumnal",
      cat: "matcd036",
      hasImage: true,
      format: 4,
      tracklisting: `
  1. tout va bien
  2. don't tell me that
  3. wells street
  4. moss oval
  5. amsterdam
  6. bye bye
  7. the bobby
  8. st. pancras
  9. a short film about sleeping
  10. troublesome
  11. fingerprints
      `,
      label: "Matinée Recordings",
      notes:
        'cd re-issue of our first recordings as pipas! with the addition of the tracks from the *short film about sleeping* 7".',
    },
    {
      date: new Date("2004-12-14"),
      title: "v/a This is my country",
      cat: "jab2029",
      hasImage: true,
      format: 6,
      label: '<a href="https://jabalinamusica.com">Jabalina Música</a>',
      tracklisting: "16. it behooves (exclusive to this release)",
    },
    {
      date: new Date("2005-05-05"),
      title: "Cinco de Mayo (Long Lost Tour CD)",
      cat: "llc03",
      hasImage: true,
      format: 2,
      label: "Long Lost Cousin",
      tracklisting: `
  1. no puedes pensar
  2. riff-raff
  3. yrrkdbk
  4. the abstract geometries (exclusive to this release)
  5. sleep = shut up (ellie's song) (exclusive to this release)
      `
    },
    {
      date: new Date("2005-09-01"),
      title: "&Auml; PoP",
      cat: "traga001",
      hasImage: true,
      format: 5,
      label: '<a href="https://tragadiscos.com">Tragadiscos Records</a>',
      tracklisting:
        "5. R U (exclusive to this release)",
      notes:
        "w/ the lucksmiths, the shermans, nice man, sodastream &amp; charm filter. ltd to 250 copies!",
    },
    {
      date: new Date("2006-01-01"),
      title: "v/a Bon voyage",
      cat: "jab2033",
      hasImage: true,
      format: 6,
      label: "Jabalina Música",
      tracklisting: `
17. floortime (exclusive to this release)
      `,
    },
    {
      date: new Date("2006-09-01"),
      title: "Sorry Love",
      cat: "llc04",
      hasImage: true,
      format: 4,
      label: "Long Lost Cousin",
      tracklisting: `
1. basements
2. riff raff
3. you crash
4. boxes
5. windswept room
6. no puedes pensar
7. long songs
8. yrrkdbk
9. the only ones
10. sorry love
`,
    },
    {
      date: new Date("2010-12-27"),
      title: "Your Wonderful Parade",
      cat: "annika99",
      hasImage: true,
      format: 6,
      label: "Annika",
      tracklisting:
        `
  - hard times (remix – exclusive to this release)
  - somebody else (exclusive to this release)
        `
    }
  ]);
}
