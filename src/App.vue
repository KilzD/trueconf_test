<template>
    <div id="app">
        <div class="flex">
            <div class="timer_place">
                <Timer :time="times[color-1]"/>
            </div>
        </div>
        <TrafficLights :colors="colors" :color="color" :times="times"/>
    </div>
</template>

<script>
    import TrafficLights from './components/TrafficLights.vue'
    import Timer from "@/components/Timer";

    export default {
        name: 'app',
        data: function () {
            return {
                times: [10000, 3000, 15000],
                color: Number(window.location.pathname.substr(1)),
                colors: ["red", "darkorange", "green"]
            }
                ;
        },
        components: {
            Timer,
            TrafficLights
        }
    }
</script>

<style>


    .flex {
        display: flex;
        justify-content: flex-end;
    }

    .timer_place{
        background-color: lightgoldenrodyellow;
        border-radius: 5px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }

</style>
