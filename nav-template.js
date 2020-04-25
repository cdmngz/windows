Vue.component('nav-template', {
    template:`
    <nav>
        
        <a class="icono" v-for="(icono, index) in iconos" v-if="icono.tipo==opcion">
            <img :src="icono.icon"><br>
            <label>{{ icono.nombre }}</label>
        </a>
        
        <button @click="agregarIcon(opcion)"><label>New</label><br>+</button>
    
    </nav>
    `,
    props: ['opcion'],
    data: () => {
        return {
            cont: 20,
            iconos: [
                { icon: '10recy.png', nombre: 'Papelera Reciclaje', tipo: '10' },
                { icon: '10eq.png', nombre: 'Este Equipo', tipo: '10' },
                { icon: '10ma.png', nombre: 'Mis Archivos', tipo: '10' },
                { icon: '10ie.png', nombre: 'Internet Explorer', tipo: '10' },
                { icon: '10cursor.png', nombre: 'Mouse', tipo: '10' },                
                { icon: '7eq.png', nombre: 'Icono3', tipo: '7' },                
                { icon: '7ma.png', nombre: 'Icono2', tipo: '7' },                
                { icon: '7recy.png', nombre: 'Icono3', tipo: '7' },                
                { icon: '98recy.png', nombre: 'Papelera Reciclaje', tipo: '98' },
                { icon: '98eq.png', nombre: 'Este Equipo', tipo: '98' },
                { icon: '98ma.png', nombre: 'Mis Archivos', tipo: '98' },
                { icon: '98ie.png', nombre: 'Internet Explorer', tipo: '98' }          
            ]
        }
    },
    methods: {
        agregarIcon(value) {
            objeto = {
                icon: '10image.png',
                nombre: 'Icon'+this.cont,
                tipo: value
            }
            this.cont++
            this.iconos.push(objeto)
        }
    },
})