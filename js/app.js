let message = {
    props: {
        type: {type: String, default: 'success'},
        message: String
    },
    template: `<div class="ui message" :class="type">{{ message }}</div>`
}

let counter = {
    template: `<div>
        <span>{{ count }}</span>
    </div>`
}

let vm = new Vue({
    el: '#app',
    components: { message },
    data: {
        message: 'Un meilleur text'
    },
    computed: {
        fullname: function () {
            return this.firstname + ' ' + this.lastname
        }
    }

})
