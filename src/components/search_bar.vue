<template>
    <div class="main-middle-container">
        <div class="search-container">
            <input type="text" class="search-input" placeholder="Search...">
            <i-lets-icons-search-duotone class="search-icon" />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.search-container {
    position: relative;
    width: 100%;
    margin-bottom: 30px;

}


.search-input {
    width: 100%;
    padding: 10px 30px 10px 10px;
    border-radius: 30px;
    font-size: 16px;
    background-color: #00000000;
    color: #ccc;
}

.search-input:focus {
    outline: none;
}

.search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #ccc
}

.search-icon:hover {
    color: #ffffff
}
</style>