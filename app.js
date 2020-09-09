const app = new Vue({
    el: '#app',
    data: {
        // Atributo para el titulo
        titulo: 'GESTION DE TAREAS',
        // Atributo para el nombre de la tarea a adicionar
        nuevaTarea: '',
        // Definir un array de objetos para guardar las tareas
        tareas: [],
    },
    methods:{
        // Crear metodo para guardar una tarea
        agregarTarea: function() {
            // console.log(this.nuevaTarea);
            // Guardar en el array la nueva tarea
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            // console.log(this.tareas);
            // Vaciar el campo de nombre de tarea
            // para ingresar una nueva tarea
            this.nuevaTarea = '';

            // =============================== localstorage =======================
            // Guardar todo el array en localstorage reemplazando el anterior
            localStorage.setItem('apptareas', JSON.stringify(this.tareas));
            // ====================================================================

        },
        // Crear funcion para cambiar estado de una tarea
        finalizarTarea: function (index) {
            // console.log('finalizar tarea......'+index);
            // Cambiar el estado
            this.tareas[index].estado = true;
        },
        // Crear funcion para eliminar una tarea
        eliminarTarea: function (index) {
            // console.log('eliminar tarea......'+index);
            // Eliminar el objeto del array
            this.tareas.splice(index, 1);
            
            // =============================== localstorage =======================
            // Guardar todo el array en localstorage reemplazando el anterior
            localStorage.setItem('apptareas', JSON.stringify(this.tareas));
            // ====================================================================
        }
    },
    // =================================================================
    // Crear funcion para obtener datos de localstorage
    // cuando se cargue app.vue
    created: function() {
        // Obtener datos de localstorage en formato json
        let datosDB = JSON.parse(localStorage.getItem('apptareas'));
        // Preguntamos no existen elementos en el array
        if(datosDB === null){
            // Inicializar array en vacio
            this.tareas = [];
        }else{
            // Cargar los datos de localstorage
            this.tareas = datosDB;
        }
    }
    // =================================================================
})