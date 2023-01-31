<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/introduccion.png')})`}" data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, le damos la bienvenida a este componente formativo, donde podrá explorar elementos relacionados con la gestión de la información documental, iniciando con el reconocimiento de conceptos esenciales para recorrer el proceso, así como también las herramientas para codificar y divulgar la información que reposará en los sistemas de gestión documental, garantizando confiabilidad, pertinencia y efectividad.

    .row.justify-content-center.mt-5
      p A través de la exploración de las temáticas, se proponen elementos que orienten hacia el fortalecimiento de procesos que propendan por la calidad y disponibilidad de la información documental, en procura de una gestión eficiente y eficaz de las organizaciones, además del cumplimiento de los requisitos legales.
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    .row.mt-5
      .video
        iframe(data-aos="fade-left" width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
