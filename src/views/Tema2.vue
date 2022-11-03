<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de codificación

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-img1.png')})`}" data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p A continuación, profundizaremos en los métodos de codificación en el ámbito de la organización, de acuerdo con sus características y particularidades y, cómo esta, deberá diseñar y establecer una guía que permita orientar la elaboración y codificación de documentos en el marco de su sistema de gestión documental; esta herramienta debe facilitar los procesos, incluyendo los elementos que se entenderán a continuación.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Elementos para la elaboración de documentos y estructura documental

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.color-secundario2.p-4.mt-5
          p(data-aos="fade-down") Al momento de establecer la estructura de elaboración documental, el SGD deberá definir los lineamientos para la elaboración de documentos; dicha estructura o guía, deberá ser oficializada en el marco de la implementación del sistema y todas las áreas y funcionarios implicados, deberán apropiarla y ponerla en marcha para lograr una documentación estructurada.
      p.mt-4 La guía deberá contemplar aspectos como:

    .tarjeta.tarjeta--tiempo.p-4(data-aos="fade-right").mt-4
      LineaTiempoC.color-primario(text-small).p-3
        .row.justify-content-center.align-items-start(titulo="Objetivo").lt2-c-ubicacion-interna-1
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img2.png', alt='')        
              .col-lg-7
                p Se debe detallar lo que se pretende, a través de la implementación de la guía.

        .row.justify-content-center.align-items-start(titulo="Alcance y definiciones").lt2-c-ubicacion-interna-2
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img3.png', alt='')        
              .col-lg-7
                p Después de explicar el alcance de la guía, se establece y se define un glosario de los elementos técnicos que se incluyen en esta.

        .row.justify-content-center.align-items-start(titulo="Condiciones generales").lt2-c-ubicacion-interna-3
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img4.png', alt='')        
              .col-lg-7
                p Se optimiza la estructura organizacional y las condiciones particulares de los funcionarios que la empresa alberga.

        .row.justify-content-center.align-items-start(titulo="Contenido y desarrollo").lt2-c-ubicacion-interna-4
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img5.png', alt='')        
              .col-lg-7
                p Documentos del sistema: se categorizan los tipos de documentos que hacen parte del sistema y se les asigna un código alfanumérico, dependiendo de su uso y aplicación. (Ejemplo: Política = PT, Procedimientos = PR).
                p Contenido de los documentos: se especifica el contenido de cada uno de los tipos de documento que componen el sistema, estableciendo claridad en relación con aspectos como: el objetivo, el alcance, las definiciones, los responsables y la descripción detallada de las actividades, incluyendo un diagrama de flujo.

        .row.justify-content-center.align-items-start(titulo="Contenido y desarrollo").lt2-c-ubicacion-interna-5
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img5.png', alt='')        
              .col-lg-7
                p La codificación del sistema de gestión documental, se hará con una combinación de números arábigos y letras mayúsculas, tomando como referencia los tipos de procesos a los que hacen referencia, tal y como se detalla a continuación: Se inicia con las dos primeras letras del nombre del tipo de proceso, seguidas de las dos primeras letras del nombre del proceso; luego, las primeras letras del tipo de documento y, por último, el número consecutivo del documento a dos dígitos. (Estas consideraciones, incluyendo la identificación del tipo de proceso y su nombre, deben ser definidas, previamente, por la alta dirección).
                p.text-bold Ejemplo:
                ul.lista-ul.mb-5
                  li
                    | Tipo de proceso: estratégico
                  li 
                    | Nombre del proceso: dirección
                  li 
                    | Tipo de documento: procedimiento
                  li 
                    | Consecutivo: 01                

        .row.justify-content-center.align-items-start(titulo="Encabezado").lt2-c-ubicacion-interna-6
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img6.png', alt='')        
              .col-lg-7
                p Se deberán incluir los elementos que lleva el encabezado, tal y como se muestra en la imagen.
                p En todas las hojas debe aparecer este cuadro (como en la imagen), que identifica el documento y contiene la siguiente información:
                ol.lista-ol
                  li 
                    span 1. 
                    | Logotipo.
                  li 
                    span 2. 
                    | Nombre de la organización y número de identificación.
                  li 
                    span 3. 
                    | Nombre del documento.
                  li 
                    span 4. 
                    | Nombre del proceso responsable del documento.
                  li 
                    span 5. 
                    | Número de la página (especificar formato de letra).
                  li 
                    span 6. 
                    | Fecha de aprobación (especificar formato de fecha).
                  li 
                    span 7. 
                    | Versión del documento para verificar posibles cambios aplicados al formato.
                  li 
                    span 8. 
                    | Código del documento (especificar formato de letra).
                  li 
                    span 9. 
                    | Títulos de las secciones (especificar formato de letra /estas celdas no deben ser modificables).

        .row.justify-content-center.align-items-start(titulo="Cuerpo del documento").lt2-c-ubicacion-interna-7
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img7.png', alt='')        
              .col-lg-7
                p Se deben especificar las características de redacción, tamaño y tipo de letra, tipo de títulos y la forma en que debe ser redactado el documento.

        .row.justify-content-center.align-items-start(titulo="Cierre del documento").lt2-c-ubicacion-interna-8
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img8.png', alt='')        
              .col-lg-7
                p Se debe incluir un cuadro en el que se especifique quiénes fueron los responsables de la elaboración, de la revisión y de la aprobación del documento; dicho cuadro deberá cumplir con las especificaciones técnicas de tamaño, tipo de letra y formato de fecha, definidos en la imagen.

        .row.justify-content-center.align-items-start(titulo="Márgenes del documento").lt2-c-ubicacion-interna-9
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img9.png', alt='')        
              .col-lg-7
                p Definición del tipo de márgenes, interlineado y tamaño de letra, que deberán ser aplicados a los documentos.

        .row.justify-content-center.align-items-start(titulo="Diagrama de flujo").lt2-c-ubicacion-interna-10
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img10.png', alt='')        
              .col-lg-7
                p Hay que especificar la simbología incluida en el proceso al que se hace referencia en el documento.

        .row.justify-content-center.align-items-start(titulo="Documentos de referencia").lt2-c-ubicacion-interna-11
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img11.png', alt='')        
              .col-lg-7
                p Es importante e imprescindible, incluir la normativa tenida en cuenta para la elaboración del documento.

        .row.justify-content-center.align-items-start(titulo="Control de cambios").lt2-c-ubicacion-interna-12
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img12.png', alt='')        
              .col-lg-7
                p Se debe incluir la fecha, la versión y la descripción de los cambios realizados al documento.

        .row.justify-content-center.align-items-start(titulo="Anexos").lt2-c-ubicacion-interna-13
          .col-lg-11
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img13.png', alt='')        
              .col-lg-7
                p Se refiere a la documentación relacionada con el sistema de gestión.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Métodos de divulgación documental

      .bloque-texto-b.color-primario.p-4
        .bloque-texto-b__texto
          p.mb-0 La divulgación documental es un proceso estratégico en el que se debe hacer uso de herramientas comunicativas y formativas, enfocadas hacia el reconocimiento y apropiación del sistema de gestión documental por parte de los miembros que conforman la organización; debe abarcar e involucrar a la totalidad de las áreas funcionales y a los responsables de los diferentes procesos que se llevan a cabo en la empresa; para lograrlo de manera efectiva, es importante realizar procesos de sensibilización y capacitación, en los que se evidencie la importancia de su apropiación y uso adecuado, así como también las ventajas que se derivan de su correcta aplicación.

        p.mt-3 Para lograr este objetivo, se puede disponer de acciones como las que se nombran a continuación:

    .row.justify-content-around.aling-items-center.mt-4.mb-5
      .col-lg-10
        .blq3.bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .blq3.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-img14.png')})`}" data-aos="fade-right")
          .blq3.bloque-texto-g__texto.p-4
            ul.cajon.lista-ul.mb-5
              li
                i.fas.fa-angle-right
                | Charlas de sensibilización.
              li
                i.fas.fa-angle-right
                | Capacitaciones (grupales o individuales).
              li
                i.fas.fa-angle-right
                | Comunicaciones oficiales.
              li
                i.fas.fa-angle-right
                | Repositorios o bancos de documentos.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-11
        .cajon.color-secundario1.p-4
          p Los encargados del sistema de gestión documental y la alta dirección, son responsables de los procesos de apropiación por parte de los equipos que hacen parte de la organización; por otro lado, los líderes o responsables del proceso, dada la naturaleza de sus funciones y la familiaridad con el proceso a su cargo, están llamados a identificar las oportunidades de mejora y la actualización de los mismos, con el fin de dar trámite al procedimiento relacionado con su ajuste y posterior aprobación, e inclusión en el sistema de información.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
