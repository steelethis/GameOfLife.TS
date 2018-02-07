import Vue from "vue";
import GameofLifeComponent from "./Components/GameofLife.vue";

const v = new Vue({
    el: "#app",
    template: "<GameofLifeComponent/>",
    components: {GameofLifeComponent},
});
