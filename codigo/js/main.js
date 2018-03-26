Vue.component('peliculas', {
    template: `
        <h1> Componente {{titulo}}</h1>
    `,
    data() {
        return {
            titulo: 'Peliculas'
        }
    }
});

Vue.component('frutas', {
    props: ['objeto'],
    template: `
        <div class="componente-frutas">
            <h1> Componente Frutas</h1>
            <h3>{{objeto.nombre}}</h3>
        </div>
    `
});

Vue.component('frutas-inline', {
    props: ['objeto']
});

Vue.component('padre', {
    template: `
        <div class="componente-padre">
            <h1> Componente Padre</h1>
            <div>
                <hijo></hijo>
            </div>
        </div>
    `
});

Vue.component('hijo', {
    template: `
        <div class="componente-frutas">
            <p style="background:yellow;">Soy un parrafo en el componente hijo</p>
        </div>
    `
});

Vue.component('posts', {
    template: `
        <div class="component-posts">
            <hr>
                <h1>Listado con Ajax desde Componente POSTS</h1>
                <ol>
                    <li v-for="post in posts">
                        {{ post.title }}
                    </li>
                </ol>
            <hr>
        </div>
    `,
    mounted() {
        // alert('Hola mundo desde MOUNTED');
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response.data);
                this.posts = response.data;
            });
    },
    data() {
        return {
            posts: null
        }
    }
});

Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue({
    el: 'main',
    mounted() {
        // alert('Hola mundo desde MOUNTED');
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response.data);
                this.posts = response.data;
            });
    },
    data: {
        texto: 'Hola mundo desde VueJS2',
        nombre: 'Juan Antonio',
        apellidos: 'Mayoral Gutierrez',
        nota: 5,
        peliculas: ['Catwoman', 'Spiderman 3', 'Batman vs superman', 'La verdad duele', 'Los mercenarios'],
        frutas: [
            {
                nombre: 'Manzana',
                temporada: 'Invierno',
                precio: 'Bajo'
            },
            {
                nombre: 'Naranja',
                temporada: 'Otoño',
                precio: 'Medio'
            },
            {
                nombre: 'Cereza',
                temporada: 'Primavera',
                precio: 'Alta'
            },
            {
                nombre: 'Sandia',
                temporada: 'Verano',
                precio: 'Medio'
            }
        ],
        superfruta: {
            nombre: 'Mandarina',
            temporada: 'Verano',
            precio: 'Medio'
        },
        peliculaNueva: null,
        busqueda: "",
        confirmado: null,
        posts: null,
        elegido: 'padre'
    },
    methods: {
        crearPelicula: function () {
            //alert(this.peliculaNueva);
            this.peliculas.unshift(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(indice) {
            //alert(indice);
            this.peliculas.splice(indice, 1);
        },
        marcar(index) {
            this.confirmado = index;
        }
    },
    computed: {
        nombreYapellidos() {
            const date = new Date();
            const year = date.getFullYear();
            return this.nombre + ' ' + this.apellidos + ' - Nota: ' + this.nota + ' - ' + year;
        },
        peliculasOrdenadas() {
            return this.peliculas.sort();
        },
        buscarFruta() {
            return this.frutas.filter(fruta => fruta.nombre.toUpperCase().includes(this.busqueda.toUpperCase()));
        }
    }
});

const vue2 = new Vue({
    el: '#segunda',
    data: {
        texto: 'Segunda instancia VueJS'
    }
});

const vue3 = new Vue({
    el: '#tercera',
    data: {
        texto: 'Tercera instancia VueJS'
    }
});