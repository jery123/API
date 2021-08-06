import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify';
Vue.config.productionTip = false
    Vue.config.devtools = false;

       var app = new Vue({
            el: '#app',
            template: `
                 <div class="photo-upload">
            <div class="file-upload-form">
                <input
                    type="file"
                    @change="previewThumbnail"
                    name="photo-upload-button"
                    id="photo-upload-button"
                    accept="image/*"
                    class="input-file"
                />
                <label for="photo-upload-button">Carregue sua foto</label>
            </div>
            <div
                class="image-preview"
                v-if="imageData.length > 0"
            >
                <img
                    :src="imageData"
                    class="image-preview__img"
                >
            </div>
        </div>
        `,
            data: function returnImageData() {
                return {
                    imageData: '',
                };
            },
            methods: {
                previewThumbnail: function getPreview(event) {
                    const input = event.target;
                    if (input.files && input.files[0]) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            this.imageData = e.target.result;
                        };
                        reader.readAsDataURL(input.files[0]);
                    }
                },
            },
        })

export default app