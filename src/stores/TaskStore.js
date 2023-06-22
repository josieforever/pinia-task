import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: []
    }),
    getters: {
        favs() {
            return this.tasks.filter( task => task.isFav )
        },
        favCount: (state) => {
            // here we can used an arrow function meaning we cant use the this keyword because of how the arrow function handles it
            // so we have to pas in the state property as an argument them we can access the tasks field in it
            return state.tasks.reduce( ( p , c ) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: state => state.tasks.length //this is a short from when you are just returning stuff (computed)
    },
    actions: {
        async getTasks() {
            const res =  await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
        }, 
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(title) {
            this.tasks = this.tasks.filter( task => {
                return task.title != title
            })
        },
        addToFavs(title) {
            const foundTask = this.tasks.find( task => {
                return task.title === title
            })
            foundTask.isFav = !foundTask.isFav
        }
    }
})