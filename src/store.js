import {reactive} from 'vue';

export const store = reactive({
    navOpen: false,
    slides: [
        {
          id: 1,
          title: 'Netlfix',
          github: 'https://github.com/ldm0805/vite-boolflix',
          image: "/img/portfolio/boolflix/netflix_home.png",
          description: "Boolflix è un progetto ispirato a Netflix, usato per studiare e gestire le API.",
          tech: [
            'HTML',
            'CSS',
            'Vue',
            'Vite',
            'Api',
            'Sass',
            'Javascript'
          ]
        },
        {
          id: 2,
          title: 'Whatsapp',
          github: 'https://github.com/ldm0805/vue-boolzapp',
          image: "/img/portfolio/boolzapp/whatsapp.png",
          description: "Whatsapp",
          tech: [
            'HTML',
            'CSS',
            'Javascript',
            'Api',
          ]
        },
        {
          id: 3,
          title: 'Campominato',
          github: 'https://github.com/ldm0805/js-campominato-dom',
          image: "/img/portfolio/campominato/campominato.png",
          description: "Campominato",
          tech: [
            'HTML',
            'CSS',
            'Javascript',
          ]
        },
        {
          id: 4,
          title: 'Spotify',
          github: 'esempio',
          image: "/img/portfolio/spotify/spotify_home.png",
          description: "Spotify",
          tech: [
            'foo',
            'ciao'
          ]
        },
      ],
})