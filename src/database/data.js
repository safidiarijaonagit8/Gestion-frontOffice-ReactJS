//   For the Navbar
const user = {
  username: "Administrateur",
  pfp: "1.png",
};

//   For the Sidebar
const playlists = [
  {
    title: "Uptown Funk",
    image: "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
    link: "",
  },
  {
    title: "Gym Playlist",
    image: "https://i.scdn.co/image/ab67706c0000bebbc5cc2fbe603427c47b630014",
    link: "",
  },
  {
    title: "Top Gaming Tracks",
    image: "https://i.scdn.co/image/ab67706c0000bebb72ed21e90d7fc2e568c24ad5",
    link: "",
  },
  {
    title: "Indie Tunes | Best Indie Hits",
    image: "https://i.scdn.co/image/ab67706c0000bebbf6391b95b72c240d1fd826bb",
    link: "",
  },
  {
    title: "This is Taylor Swift",
    image: "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
    link: "",
  },
  {
    title: "This is Arctic Monkeys",
    image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO4BaAkp-large.jpg",
    link: "",
  },
  {
    title: "Alps Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/0bvLEf3ydME5vTuOwp6aKH/en",
    link: "",
  },
  {
    title: "This is BTS",
    image: "https://i.scdn.co/image/ab67706f00000003a7aec3961666dee881cee250",
    link: "",
  },
  {
    title: "Love is a Laserquest",
    image: "https://i.scdn.co/image/ab67616d0000b273b38e53ebc43deea5ae7e57fd",
    link: "",
  },
  {
    title: "Yeh Fitoor Mera",
    image: "https://i.scdn.co/image/ab67616d0000b2736c678e8928cc0add9fc23bfd",
    link: "",
  },
  {
    title: "Violin Covers",
    image: "https://i.scdn.co/image/ab67706c0000bebb67d691f27ba898b859c99d4b",
    link: "",
  },
  {
    title: "Uptown Funk",
    image: "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
    link: "",
  },
  {
    title: "Gym Playlist",
    image: "https://i.scdn.co/image/ab67706c0000bebbc5cc2fbe603427c47b630014",
    link: "",
  },
  {
    title: "Top Gaming Tracks",
    image: "https://i.scdn.co/image/ab67706c0000bebb72ed21e90d7fc2e568c24ad5",
    link: "",
  },
  {
    title: "Indie Tunes | Best Indie Hits",
    image: "https://i.scdn.co/image/ab67706c0000bebbf6391b95b72c240d1fd826bb",
    link: "",
  },
  {
    title: "This is Taylor Swift",
    image: "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
    link: "",
  },
  {
    title: "This is Arctic Monkeys",
    image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO4BaAkp-large.jpg",
    link: "",
  },
  {
    title: "Alps Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/0bvLEf3ydME5vTuOwp6aKH/en",
    link: "",
  },
  {
    title: "This is BTS",
    image: "https://i.scdn.co/image/ab67706f00000003a7aec3961666dee881cee250",
    link: "",
  },
  {
    title: "Love is a Laserquest",
    image: "https://i.scdn.co/image/ab67616d0000b273b38e53ebc43deea5ae7e57fd",
    link: "",
  },
  {
    title: "Yeh Fitoor Mera",
    image: "https://i.scdn.co/image/ab67616d0000b2736c678e8928cc0add9fc23bfd",
    link: "",
  },
  {
    title: "Violin Covers",
    image: "https://i.scdn.co/image/ab67706c0000bebb67d691f27ba898b859c99d4b",
    link: "",
  },
];

//   For the Rectangular Cards - 6 only
const topLists = [
  {
    title: "Liked Songs",
    image:
      "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg",
    link: "",
  },
  {
    title: "This is Taylor Swift",
    image: "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
    link: "",
  },
  {
    title: "This is BTS",
    image: "https://i.scdn.co/image/ab67706f00000003a7aec3961666dee881cee250",
    link: "",
  },
  {
    title: "Ultimate Pop Gaming",
    image: "https://i.scdn.co/image/ab67706f000000038a24ebc68da6edc3eb998fcf",
    link: "",
  },
  {
    title: "Amit Trivedi Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
    link: "",
  },
  {
    title: "Morning Motivation",
    image: "https://i.scdn.co/image/ab67706f00000003037da32de996d7c859b3b563",
    link: "",
  },
];

// For different sections with Cards
const sections = [
  {
    category: "Best of Artists",
    playlists: [
      {
        title: "This is Selena Gomez",
        subtitle:
          "Listen to Selena's latest releases, plus all her essential hits.",
        image:
          "https://i.scdn.co/image/ab67706f000000037cda1a881997b0bb1ca0eb92",
        artist: false,
      },
      {
        title: "This is Camila Cabello",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://i.scdn.co/image/ab67706f00000003181896dd694bc09e4a0f13c8",
        artist: false,
      },
      {
        title: "This is Arijit Singh",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab67706f000000033ec51dd9c17a9add42c2e249",
        artist: false,
      },
      {
        title: "This is Conan Gray",
        subtitle:
          "This is Conan Gray. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO2SyYJ7-large.jpg",
        artist: false,
      },
      {
        title: "This is Shreya Ghoshal",
        subtitle:
          "This is Shreya Ghoshal. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0arULD-large.jpg",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Halsey",
        subtitle: "The essential Halsey, all in one place.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a39589c9b0a3606aa6bac46b",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Your Top Mixes",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Made for You",
    playlists: [
      {
        title: "Discover Weekly",
        subtitle:
          "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
        image:
          "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/1hOQbRi213JeaYwxaa4gdmrx7g2k9-eUbA8EtGNNKyW09kMy20Q23LWwjGBBP2xvcCMtFglKraGrB7foVW0-DKBNBzZGVo4irckiud6AwEk=/NzU6ODA6OTBUNTItNzAtMg==",
        artist: false,
      },
      {
        title: "Daily Mix 1",
        subtitle: "Pritam, Rahul Sharma, Jatin-Lalit and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcb6926f44f620555ba444fca/1/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 2",
        subtitle: "BTS, AgustD, j-hope and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5704a64f34fe29ff73ab56bb/2/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 3",
        subtitle: "Eminem, Mac Miller, Logic and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 4",
        subtitle: "Bob Marley & The Wailers, Aswad, Black Roots and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/4cd57e5e12ea2c24644c40886d65a9b22eca9802/4/en/large",
        artist: false,
      },
      {
        title: "Daily Mix 5",
        subtitle: "Disturbed, Breaking Benjamin, Three Days Grace and more",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb012addc95f5b2e7283f45446/5/en/large",
        artist: false,
      },
    ],
  },
  {
    category: "Recently Played",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },

  {
    category: "Spotify original & exclusive shows",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Based on your recent listening",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "India's Best",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
  {
    category: "Throwback",
    playlists: [
      {
        title: "This is Taylor Swift",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
        artist: false,
      },
      {
        title: "Amit Trivedi Radio",
        subtitle: "By Spotify",
        image:
          "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
        artist: false,
      },
      {
        title: "Adele",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
        artist: true,
      },
      {
        title: "reputation",
        subtitle: "Taylor Swift",
        image:
          "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
        artist: false,
      },
      {
        title: "Harry Styles",
        subtitle: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
        artist: true,
      },
      {
        title: "Illuminate (Deluxe)",
        subtitle: "Shawn Mendes",
        image:
          "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        artist: false,
      },
    ],
  },
];

export { user, playlists, topLists, sections };
