import Vue from "vue";
import Index from "./Index.vue";

import $ from 'jquery';

$("body").css("border","1px solid #000");

new Vue({
    el:"#app",
    template:'<Index/>',
    components:{
        Index
    }
});
