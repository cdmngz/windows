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
            cont: 1,
            iconos: [
                { icon: '10recy.png', nombre: 'Papelera de Reciclaje', tipo: '10' },
                { icon: '10eq.png', nombre: 'Este Equipo', tipo: '10' },
                { icon: '10ma.png', nombre: 'Mis Archivos', tipo: '10' },
                { icon: '10ie.png', nombre: 'Edge', tipo: '10' },
                { icon: 'ot.svg', nombre: 'Outlook', tipo: '10' },
                { icon: '10cursor.png', nombre: 'Mouse', tipo: '10' },                
                { icon: '7recy.png', nombre: 'Papelera de Reciclaje', tipo: '7' },                
                { icon: '7eq.png', nombre: 'Este equipo', tipo: '7' },                
                { icon: '7ma.png', nombre: 'Mis Archivos', tipo: '7' },          
                { icon: 'chrome.png', nombre: 'Chrome', tipo: '7' },  
                { icon: 'xprecy.png', nombre: 'Papelera de Reciclaje', tipo: 'xp' },                
                { icon: 'xpeq.png', nombre: 'Este equipo', tipo: 'xp' },                
                { icon: 'xpma.png', nombre: 'Mis Archivos', tipo: 'xp' },          
                { icon: 'firefox.png', nombre: 'Mozilla Firefox', tipo: 'xp' },          
                { icon: 'lw.png', nombre: 'LimeWire', tipo: 'xp' },          
                { icon: 'msn.png', nombre: 'Msn', tipo: 'xp' },          
                { icon: 'pg.png', nombre: 'PostgreSQL', tipo: 'xp' },          
                { icon: 'wa.png', nombre: 'Winamp', tipo: 'xp' },          
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
                icon: value+'new.png',
                nombre: 'New'+this.cont,
                tipo: value
            }
            this.cont++
            this.iconos.push(objeto)
        }
    },
})