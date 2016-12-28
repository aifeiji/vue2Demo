<template>
<div id="firstComponent">
    <h1>I am a title now.</h1>
    <a> written by {{author}}</a>
</div>
</template>

<script type="text/javascript">
 export default{
    data(){
        return {
            author:"shenyuye"
        }
    }
 }
</script>

<style>
    h1{
        color:red;
    }
</style>