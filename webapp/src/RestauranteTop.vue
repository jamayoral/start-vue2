<template>
  <h2>Esto es la {{texto}}: {{idRestaurante}}</h2>
</template>

<script>
export default {
  name: "restaurante-top",
  mounted () {
    this.idRestaurante = this.$route.params.id;
  },
  data() {
    return {
      texto: "Página Restaurante Destacado",
      idRestaurante: null
    };
  }
};
</script>

<style>

</style>
