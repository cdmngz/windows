Vue.component('windows-template', {
    template:`
    <div>
        <img v-if="opcion != 98" class="imagen-fondo" :src="[opcion+'.jpg']">
        
        <nav-template :opcion="opcion"></nav-template>
        
        <div v-if="mostrar" :class="['taskStart', 'taskStart'+opcion]"></div>
        
        <p :class="['p'+opcion]">
            <img :src="[opcion+'start.png']" :class="['buttonStart'+opcion]" @click="mostrar = !mostrar">
            <span v-for="opcion in opciones" @click="cambiarWindow(opcion)">W{{ opcion }}</span>
            <span>{{ HHMM }}</span>
        </p>
    </div>  
    `,
    data: () => {
        return {
            HHMM: '',
            mostrar: false
        }
    },
    props: ['opciones', 'opcion'],
    created() {
        this.getNow()
        setInterval(this.getNow, 10000);
    },
    methods: {
        cambiarWindow(value){
            console.log(value)
            this.$emit('windows-hijo', 'windows-'+value)
        },
        getNow() {
            const today = new Date();
            const date = today.getDate()+'/'+((today.getMonth()+1)<10?'0':'') + (today.getMonth()+1)+'/'+today.getFullYear();
            const time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();
            this.HHMM = date+' '+time;
        }
    },
})