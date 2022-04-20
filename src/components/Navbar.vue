<template>
  <header>
    <h1>Simple Blog</h1>
    <nav>
      <div><router-link :to="{ name: 'home' }">Home</router-link></div>
      <div><router-link :to="{ name: 'Create' }">Create</router-link></div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header a {
  color: #dfdfdf;
  text-decoration: none;
  margin-left: 20px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}
header a::before {
  content: "";
  position: absolute;
  background-color: #444;
  height: 3px;
  width: 0%;
  bottom: -5px;
  transition: all 0.3s ease-in-out;
}
nav {
  display: flex;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
header a.router-link-active::before {
  width: 100%;
}
</style>
