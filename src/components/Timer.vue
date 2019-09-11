<template>
    <p>{{"Переход через: " + seconds + " секунд"}}</p>
</template>

<script>
    export default {
        name: "Timer",
        props: {
            time: Number
        },
        mounted(){
            this.seconds = Number(this.time/1000);
            let func = this.DecreaseSeconds;
            setInterval(function () {
                func();
            }, 1000)
        },
        data: function () {
            return {
                seconds: 0
            };
        },
        methods:{
            DecreaseSeconds(){
                this.seconds--;
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 18px;
        margin: 4px;
    }
</style>