import {reactive} from 'vue';

export const store = reactive({
    navOpen: false,
    slides: [
        {
          id: 1,
          image: "/img/portfolio/boolflix/netflix_home.png",
          description: "Immagine cane",
        },
        {
          id: 2,
          image: "/img/portfolio/boolzapp/whatsapp.png",
          description: "Immagine gatto",
        },
        {
          id: 3,
          image: "/img/portfolio/campominato/campominato.png",
          description: "Immagine ciao",
        },
        {
          id: 4,
          image: "/img/portfolio/spotify/spotify_home.png",
          description: "Immagine e",
        },
      ],
})