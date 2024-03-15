export default {
    props: {
        variant: {
            type: String,
            required: false,
        },
    },

    template: `
        <div>
            <h2>what's up</h2>
            <button :disabled="processing" :type="variant">Click me</button>
        </div>
    `,
    mounted() {
        setTimeout(() => this.processing = true, 2000)
    },

    data() {
        return {
            processing: false
        }
    }
}