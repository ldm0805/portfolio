import {reactive} from 'vue';

export const store = reactive({
    navOpen: false,
    slides: [
        {
          id: 1,
          title: 'Netlfix',
          github: 'https://github.com/ldm0805/vite-boolflix',
          image: [
            "/img/portfolio/boolflix/netflix_home.png", 
            "/img/portfolio/boolflix/netflix_home.png",
            "/img/portfolio/boolflix/netflix_home.png", 
            "/img/portfolio/boolflix/netflix_home.png",
            "/img/portfolio/boolflix/netflix_home.png", 
            "/img/portfolio/boolflix/netflix_home.png",
            "/img/portfolio/boolflix/netflix_home.png", 
            "/img/portfolio/boolflix/netflix_home.png",
            
            
          ],
          description: "Progetto ispirato a Netflix. In questo progetto l'obbiettivo è stato quello di creare una parte grafica per il sito e gestire le API dei film e la ricerca.",
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
          description: "Progetto ispirato a whatsapp web. In questo progetto l'obbiettivo è stato riprodurre l'interfaccia grafica del sito, gestire le API dei vari contatti, gestire la ricerca dei contatti e generare una risposta automatica all'invio di un messaggio in chat.",
          tech: [
            'HTML',
            'CSS',
            'Bootstrap',
            'Javascript',
            'Api',
          ]
        },
        {
          id: 3,
          title: 'Campominato',
          github: 'https://github.com/ldm0805/js-campominato-dom',
          image: "/img/portfolio/campominato/campominato.png",
          description: "Questo progetto è ispirato al gioco campominato. Si hanno 3 livelli di difficoltà (Facile,Medio,Difficile) e l'utente per vincere deve cliccare su tutte le caselle dove le bombe non sono presenti.",
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
          description: "Questo è un progetto ispirato alla nota app di Spotify, l'obbiettivo è stato quello di riprodurre la parte grafica dell'intefaccia utente.",
          tech: [
            'foo',
            'ciao'
          ]
        },
        {
          id: 5,
          title: 'Deliveboo',
          github: 'esempio',
          image: "/img/portfolio/final_proj/Progetto_finale_home.png",
          description: "Deliveboo è un progetto ispirato a Deliveroo. In questo progetto, l'obiettivo è stato quello di realizzare una piattaforma completa per la gestione di un ristorante, in cui la fusione tra il linguaggio di front-end e di back-end giocano un ruolo fondamentale. Questo permetterà agli utenti, proprietari di ristoranti, di avere un'esperienza di gestione intuitiva ed efficiente per il proprio ristorante ed ai clienti di effettuare i propri ordini con un'interfaccia dinamica ed user-friendy. ",
          tech: [
            'HTML',
            'CSS',
            'Sass',
            'Bootstrap',
            'Javascript',
            'Vue',
            'Vite',
            'Api',
            'PHP',
            'Laravel'

          ]
        },
      ],
      
})