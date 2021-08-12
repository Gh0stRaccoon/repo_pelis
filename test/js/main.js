let app = new Vue({
    el: '#perrito',
    data: {
        cuenta: 0, 
        // cuenta 
        cargadoEl: "cargaste la página " + (1+3)
    },
    methods:{
        funcionAgregar: function (){
            this.cuenta++
        },
        funcionRestar: function(){
            this.cuenta--
        }
    }
});