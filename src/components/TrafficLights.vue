<template>
    <div class="flex">
        <div class="flex_container">
            <img src="../assets/traffic_lights.png" alt="">
        </div>

        <div class="lights_container">
            <div class="red" id="red"></div>
            <div class="darkorange" id="darkorange"></div>
            <div class="green" id="green"></div>
        </div>
    </div>
</template>

<script>



    export default {
        name: 'TrafficLight',
        props:{
            colors: Array,
            times: Array,
            color: Number
        },
        mounted() {

            let scope_color = this.color;
            let scope_colors = this.colors;
            let scope_times = this.times;


            document.getElementById(scope_colors[scope_color - 1]).style.backgroundColor = scope_colors[scope_color - 1];

            if (scope_color === 1)
                sessionStorage.setItem("toRed", "0");
            if (scope_color === 3)
                sessionStorage.setItem("toRed", "1");

            let toRed = sessionStorage.getItem("toRed");

            setTimeout(function () {
                window.location.replace(window.location.origin + (toRed == 0 ? "/" + (scope_color + 1) : "/" + (scope_color - 1)));
            }, scope_times[scope_color - 1]);

            let colorChanged = false;

            setTimeout(function () {
                    setInterval(function () {
                        if (colorChanged) {
                            document.getElementById(scope_colors[scope_color - 1]).style.backgroundColor = scope_colors[scope_color - 1];
                            colorChanged = false;
                        } else {
                            document.getElementById(scope_colors[scope_color - 1]).style.backgroundColor = "#333333";
                            colorChanged = true;
                        }
                    }, 740)
                },
                scope_times[scope_color - 1] - 3000)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .flex {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .flex_container {
        position: absolute;
        width: 20vw;
        height: 30vh;
        z-index: 999;
    }

    .flex_container img {
        width: 100%;
    }

    .lights_container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 20vw;
        height: auto;
        z-index: 998;
    }

    .red {
        transition: 0.2s all;
        margin-top: 2vw;
        display: block;
        z-index: 1;
        width: 6vw;
        height: 7vw;
        content: "";
        background-color: #333333;
    }

    .darkorange {
        transition: 0.2s all;
        z-index: 1;
        width: 6vw;
        height: 7vw;
        content: " ";
        background-color: #333333;
    }

    .green {
        transition: 0.2s all;
        z-index: 1;
        width: 6vw;
        height: 7vw;
        content: " ";
        background-color: #333333;
    }

</style>