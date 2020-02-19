export default {
    name: 'Content',
    data: function () {
        return {
            port: ''
        }
    },
    mounted() {
        if (localStorage.port) {
            this.port = localStorage.port;
        }
    },
    watch: {
        port(newPort) {
            localStorage.port = newPort;
        }
    },
    template: `
<div class="lightningContent">

<section class="section">
    <div class="columns is-multiline">
        <div class="column is-half">
        <div class="box">
            <div class="media-content">
            <div class="content">
                <span class="tag is-primary">25565</span>
                <div class="title">Minecraft</div>
                <button class="button" onclick="lightning('Minecraft', 25565);">Port</button>
            </div>
            </div>
        </div>
        </div>
        <div class="column is-half">
        <div class="box">
            <div class="media-content">
            <div class="content">
                <span class="tag is-primary">28960</span>
                <div class="title">Call of Duty: World at War</div>
                <button class="button" onclick="lightning('Call of Duty: World at War', 28960);">Port</button>
            </div>
            </div>
        </div>
        </div>
        <div class="column is-half">
        <div class="box">
            <div class="media-content">
            <div class="content">
                <span class="tag is-primary">3074</span>
                <div class="title">Grand Theft Auto IV</div>
                <button class="button" onclick="lightning('Grand Theft Auto IV', 3074);">Port</button>
            </div>
            </div>
        </div>
        </div>
        <div class="column is-half">
        <div class="box">
            <div class="media-content">
            <div class="content">
                <span class="tag is-primary"><input v-model="port"></span>
                <div class="title">Custom</div>
                <button class="button" onclick="lightning('Custom', localStorage.getItem('port'));">Port</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>

</div>
    `
}