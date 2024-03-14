export default {
    template: `
        <div>
            <h2>what's up</h2>
            <button :disabled="processing">Click me</button>
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