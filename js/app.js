let message = {
    props: {
        type: {type: String, default: 'success'},
        message: String
    },
    template: `<div class="ui message" :class="type">{{ message }}</div>`
}

let counter = {
    data: function(){
        return {
            count: 0
        }
    },
    props: {
        start: {type: Number, default: 0}
    },
    computed: {
        total: function () {
            return this.start + this.count
        }
    },
    methods: {
        increment: function () {
            this.count++
        }
    },
    template: `<button @click="increment">{{ total }}</button>`
}

let vm = new Vue({
    el: '#app',
    components: { message, counter },
    data: {
        message: 'Un meilleur text'
    },
    computed: {
        fullname: function () {
            return this.firstname + ' ' + this.lastname
        }
    }

})
