<template>
    <div id="parent">
        <form>
            <div>
                <label>First Name</label>
                <input id="firstname" v-model.lazy="profile.fname" />
            </div>
            <div>
                <label>Last Name</label>
                <input id="lastname" v-model="profile.lname" />
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" value="male" v-model="profile.gender" /> male
                <input type="radio" value="female" v-model="profile.gender" /> female
            </div>
            <div>
                <label>Courses</label>
                <input type="checkbox" value="maths" v-model="profile.courses" /> Maths
                <input type="checkbox" value="science" v-model="profile.courses" /> Science
            </div>
            <div>
                <label>Country</label>
                <select v-model="profile.country">
                    <option v-for="country in countries">{{ country }}</option>
                </select>
            </div>
        </form>

    <div>
        <h2>Preview</h2>
        <h4>Name: {{ profile.fname }} {{ profile.lname }} </h4>
        <h4>Gender: {{ profile.gender }} </h4>
        <h4>
            Selected Courses:
        </h4>
        <h5 v-for="course in profile.courses"> {{ course }}</h5>
        <h4>Country: {{ profile.country }}</h4>
    </div>
    </div>
</template>
<script>
export default {
    name: 'FormSlot',
    data() {
        return {
            countries: ['Sri Lanka', 'India', 'Australia', 'Other'],
            profile:  {
                fname: '',
                lname: '',
                gender: '',
                courses: [],
                country: '',
            }
        }
    },

}
</script>
<style scoped>
#parent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10% auto;
}
</style>
