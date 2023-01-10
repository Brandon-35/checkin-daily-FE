<template>
    <div class="form-wrapper-report container" v-if="isModal">
        <h4 class="form-title">Report</h4>
        <p class="form-sub_title">Date : {{ date }}</p>
        <div class="form-report">
            <div class="list-select">
                <h4 class="form-sub_title">Project</h4>
                <select v-model="project">
                    <option v-for="project  in listProject" :key="project._id"> {{ project.name }}</option>
                </select>
                <h4 class="form-sub_title">
                    User
                </h4>
                <select v-model="user">
                    <option v-for="user  in listUser" :key="user._id"> {{ user.name }}</option>
                </select>
            </div>
            <div class="form-report-input">
                <div class="form-report-input-time">
                    <vue-timepicker v-model="timeStart" :class="{ has_error: errorsTimeStart }"></vue-timepicker>
                    <vue-timepicker v-model="timeEnd" :class="{ has_error: errorsTimeEnd }"></vue-timepicker>
                </div>
                <div class="form-report-input-content">
                    <input type="text" name="task" v-model="task">
                    <textarea name="describe" v-model="describe"></textarea>
                </div>
            </div>
        </div>
        <button class="btn-submit" @click="closeReport">Cancel</button>
        <button class="btn-submit" @click="saveReport">Send Report</button>
    </div>
</template>

<script>
import VueTimepicker from 'vue3-timepicker'
import axios from 'axios';
export default {
    inject: ['base_url_api'],
    name: 'c-modal',
    props: ['isModal', 'date'],
    components: {
        VueTimepicker
    },
    data() {
        return {
            listProject: [],
            listUser: [],
            project: '',
            user: '',
            timeStart: '',
            timeEnd: '',
            task: '',
            describe: '',
            errorsTimeEnd: false,
            errorsTimeStart: false,
        };
    },
    async created() {
        try {
            const res = await axios.get(`${this.base_url_api}project`);
            this.listProject = res.data;
        } catch (error) {
            console.log(error.message);
        }

        try {
            const res = await axios.get(`${this.base_url_api}users`);
            this.listUser = res.data;
        } catch (error) {
            console.log(error.message);
        }
    },
    methods: {
        async saveReport() {
            if (this.validateReport()) {
                let data = {
                    projectName: this.project,
                    user: this.user,
                    timeStart: this.timeStart,
                    timeEnd: this.timeEnd,
                    task: this.task,
                    describe: this.describe,
                };
                try {
                    const res = await axios.post(`${this.base_url_api}tasks`,data);
                    console.log(res);
                } catch (error) {
                    console.log(error.message);
                }
            }

        },
        validateReport() {
            this.errorsTimeStart = this.timeStart == '' ? true : false;
            this.errorsTimeEnd = this.timeEnd == '' ? true : false;
            if (this.errorsTimeStart && this.errorsTimeEnd) {
                return false;
            } else {
                return true;
            }

        },
        closeReport() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style scoped >
.form-wrapper-report {
    position: absolute;
    top: 5%;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #d9d9d9;
    padding: 25px;
    border-radius: 30px;
}

.form-report {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 30% 70%;

}

.list-select {
    display: flex;
    flex-direction: column;
}

.list-select select {
    width: 50%;
    height: 30px;
    margin: auto;
}

.form-report-input {
    display: grid;
    grid-template-columns: 30% 70%;
}

.form-report-input-time {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form-report-input-content {
    display: flex;
    flex-direction: column;
}

.form-report-input-content input {
    height: 20px;
    margin-bottom: 20px;
    width: 60%;
}

.form-report-input-content textarea {
    height: 60px;
    margin-bottom: 20px;
    width: 60%;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.btn-submit {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 10px;
}

.btn-submit:hover {
    background-color: black;
    color: white;
}

.has_error {
    border: 1px solid red;
}
</style>
