interface SeedPost {
    title: string;
    content: string;
    author: string;
    publishDate: Date;
}

interface SeedData {
    posts: SeedPost[];
}


export const initialData: SeedData = {
    posts: [
        {
            content: "Lorem aliqua eiusmod ad laborum amet magna elit et enim duis ut labore. Occaecat laborum id amet ullamco. Mollit nostrud eiusmod laborum magna est deserunt cupidatat. Eu ipsum culpa sint exercitation ad cupidatat aute veniam dolore magna eu. Fugiat elit ut do dolore laborum quis fugiat. Dolor amet elit fugiat aliqua officia qui mollit ut nulla consectetur adipisicing veniam. Cupidatat nostrud ut est non sit anim non incididunt et adipisicing qui sint.",
            author: 'John Doe',
            publishDate: new Date(),
            title: "About Lorem",
        },
        {
            content: "Lorem aliqua eiusmod ad laborum amet magna elit et enim duis ut labore. Occaecat laborum id amet ullamco. Mollit nostrud eiusmod laborum magna est deserunt cupidatat. Eu ipsum culpa sint exercitation ad cupidatat aute veniam dolore magna eu. Fugiat elit ut do dolore laborum quis fugiat. Dolor amet elit fugiat aliqua officia qui mollit ut nulla consectetur adipisicing veniam. Cupidatat nostrud ut est non sit anim non incididunt et adipisicing qui sint.",
            author: 'Max Doe',
            publishDate: new Date(),
            title: "About Lorem - 2 ",
        },
        {
            content: "Lorem aliqua eiusmod ad laborum amet magna elit et enim duis ut labore. Occaecat laborum id amet ullamco. Mollit nostrud eiusmod laborum magna est deserunt cupidatat. Eu ipsum culpa sint exercitation ad cupidatat aute veniam dolore magna eu. Fugiat elit ut do dolore laborum quis fugiat. Dolor amet elit fugiat aliqua officia qui mollit ut nulla consectetur adipisicing veniam. Cupidatat nostrud ut est non sit anim non incididunt et adipisicing qui sint.",
            author: 'Jane Doe',
            publishDate: new Date(),
            title: "About Lorem - 3",
        },
        {
            title: "El misterio del bosque encantado",
            content: "En las profundidades del bosque, donde la luz apenas se filtra entre las ramas, se encuentra un lugar mágico y misterioso. Se dice que en este bosque habitan criaturas fantásticas y que los árboles esconden secretos ancestrales. Algunos valientes aventureros se han adentrado en sus dominios, pero nadie ha regresado para contarlo. ¿Te atreves a descubrir los secretos del bosque encantado?",
            author: "Ana García",
            publishDate: new Date(),
        },
        {
            title: "Un viaje a través del tiempo",
            content: "¿Alguna vez has soñado con viajar a través del tiempo? Imagina poder visitar las grandes civilizaciones del pasado o conocer a personajes históricos que admiras. Con la ayuda de una máquina del tiempo, todo esto es posible. Pero ten cuidado, el pasado puede ser un lugar peligroso y el futuro puede no ser lo que esperas.",
            author: "Pedro López",
            publishDate: new Date(),
        },
        {
            title: "Los secretos del universo",
            content: "Desde el principio de los tiempos, la humanidad ha mirado al cielo con fascinación, preguntándose qué hay más allá de las estrellas. El universo es un lugar vasto y misterioso, lleno de secretos que aún no hemos descubierto. ¿Existen otras formas de vida en otros planetas? ¿Qué hay más allá del borde del universo? Estas son solo algunas de las preguntas que nos atormentan.",
            author: "María Pérez",
            publishDate: new Date(),
        },
        {
            title: "El poder de la mente",
            content: "¿Sabías que tu mente tiene un poder increíble? Puedes usarla para lograr cosas increíbles, desde curar enfermedades hasta leer la mente de otras personas. La mente es un arma poderosa que debemos aprender a controlar para usarla en nuestro beneficio.",
            author: "Juan Martín",
            publishDate: new Date(),
        },
        {
            title: "El amor en tiempos de guerra",
            content: "La guerra es un lugar cruel y despiadado, donde el amor parece no tener cabida. Sin embargo, incluso en las situaciones más difíciles, el amor puede florecer. Historias de amor en tiempos de guerra nos demuestran que la esperanza nunca muere y que el amor puede vencer cualquier obstáculo.",
            author: "Sofía Martínez",
            publishDate: new Date(),
        },
        {
            title: "La importancia de la familia",
            content: "La familia es el pilar fundamental de la sociedad. Es donde aprendemos valores, donde encontramos apoyo y donde creamos recuerdos que nos acompañarán toda la vida. Debemos cuidar y valorar a nuestra familia, porque son ellos quienes siempre estarán ahí para nosotros.",
            author: "David González",
            publishDate: new Date(),
        },
    ]
}