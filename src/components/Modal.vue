<template>
    <div class="form-report">
        <h4 class="form-title">Report</h4>
        <p class="form-sub_title">Date : </p>
        <div>
            <h4 class="form-sub_title">Project</h4>
            <div>

            </div>
        </div>
        <div>
            <h4 class="form-sub_title">
                User
            </h4>
            <div></div>
        </div>
        <div>
            <input type="text" name="timeStart">
            <input type="text" name="timeEnd">
            <input type="text" name="task">
            <textarea name="describe" id="" cols="30" rows="10"></textarea>
        </div>
        {{ BASE_API }}
    </div>
</template>

<script>
import { onMounted } from 'vue';
import axios from 'axios';
export default {
    inject:['base_url_api'],
    name: 'c-modal',
    data() {
        return {
            project: '',
            BASE_API : this.base_url_api
        };
    },
    methods: {
        submit(data) {
            console.log(data);
        }
    }
}

onMounted(
    axios.get(BASE_API+'user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        })
)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
