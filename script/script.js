const root = new Vue ({
    el: '#root',
    data: {
        todos: [
            'lavare i denti',
            'vestirsi',
            'pettinarsi'
        ],
        newTodo: '',
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        addTodo() {
            if (this.newTodo.trim() != '') {
                this.todos.unshift(this.newTodo.trim());
                this.newTodo = '';
            }
        }, 
        markDone(e) {
            e.target.classList.toggle('actionDone');
        }
    }
})
