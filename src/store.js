import {reactive} from 'vue';

export const store = reactive({
    navOpen: false,
    slides: [
        {
          id: 1,
          github: 'https://github.com/ldm0805/vite-boolflix',
          image: "/img/portfolio/boolflix/netflix_home.png",
          description: "Netlfix",
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