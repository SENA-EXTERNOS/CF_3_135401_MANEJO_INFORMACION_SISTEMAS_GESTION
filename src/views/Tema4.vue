<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ley de archivo vigente (Archivo General de la Nación)

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-img1.png')})`}" data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p El Archivo General de la Nación - AGN, en desempeño de su misión institucional de dirigir la política de gestión documental en el territorio nacional, establece los lineamientos relacionados con la gestión de archivo para entidades del orden público y privado, brinda diferentes herramientas que permiten ser dirigidas hacia la proyección e implementación de una cultura archivística, en cumplimiento de la normativa nacional vigente.

    .row.justify-content-center.mt-3
      .bloque-texto-b.color-primario6.p-4
        .bloque-texto-b__texto
          p.mb-0 La ley 594 de 2000, establece las directrices y generalidades relacionadas con la gestión de archivo; en 2018 se publica la primera versión del Modelo de Gestión Documental y Administración de Archivos, que sirve de referente para el desarrollo de la función archivística en las entidades y organizaciones del Estado colombiano. También, apoyará la generación y presentación de planes, programas, reportes e informes, a las diferentes instancias competentes, para implementar acciones de evaluación, seguimiento y control.

    .row.justify-content-center
      p La Ley General de Archivos se compone de XIII títulos en los que se abordan los lineamientos y disposiciones relacionados con el cumplimiento de la normativa; a continuación, se presenta un esbozo de los elementos que se incluyen en cada título:

    .row.justify-content-around.align-items-center.mt-4
      .col-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/t4-img13.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ley General de Archivos
                  p.text-small Para conocer los XIII títulos en los que se abordan los lineamientos y disposiciones relacionados con el cumplimiento de la normativa en la Ley General de Archivos, lo invitamos a leer el siguiente PDF.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Ley general de archivos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Tablas de Retención Documental (TRD)
      p Después de conocer los títulos de la Ley General de Archivos, es necesario comprender que los instrumentos de archivo son herramientas que aportan al fortalecimiento y apoyo de las estrategias relacionadas con la gestión documental en un contexto empresarial específico.

    .row.justify-content-around.align-items-center
      .col-8
        .cajon.color-secundario2.p-4.mt-3
          p(data-aos="fade-down") Este tipo de instrumento, cumple con diversas funciones que se relacionan con la determinación del valor de la documentación, así como también de la información contenida en los documentos, de forma que sea posible establecer las prioridades relacionadas con la gestión de archivo, asegurando las condiciones para el control de la producción de la información y su categorización en pro de la optimización de procesos.

    .row.justify-content-center.mt-3
      .bloque-texto-b.color-primario6.p-4
        .bloque-texto-b__texto
          p.mb-0 De acuerdo con lo anterior, una de las herramientas de mayor aceptación e implementación, que además cumple con la característica de ser de gran utilidad en la gestión documental de las organizaciones, es la Tabla de Retención Documental (TRD), cuya función central consiste en la posibilidad de asegurar, a través de la identificación de la información, desde el cumplimiento de criterios seriales, una adecuada tipificación y establecimiento de la temporalidad en la permanencia de los documentos y su disposición final.

    .row.justify-content-center
      p Los beneficios de las Tablas de Retención Documental, TRD son (ATS Gestión Documental, s.f.):

    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/tema4/t4-img2.png', alt='Texto que describa la imagen').mb-3
          .col-lg-5
            TabsA.color-acento-botones
              .tarjeta.p-4(style="background-color:#FFEBF1" titulo="1")
                .row
                  p Facilitan el manejo de la información.
              .tarjeta.p-4(style="background-color:#FFEBF1" titulo="2")
                .row
                  p Contribuyen a la correcta administración de la producción documental.
              .tarjeta.p-4(style="background-color:#FFEBF1" titulo="3")
                .row
                  p Permiten gestionar, de manera eficiente, la administración y revisión documental.
              .tarjeta.p-4(style="background-color:#FFEBF1" titulo="4")
                .row
                  p Controlan el acceso a la información y aumentan su seguridad.
              .tarjeta.p-4(style="background-color:#FFEBF1" titulo="5")
                .row
                  p Garantizan la conservación de los documentos, con base en la relevancia de su información y tipificación documental.
              .tarjeta.p-4(style="background-color:#FFEBF1" titulo="6")
                .row
                  p Contribuyen al manejo integral de la información.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Guías técnicas para la elaboración de la información documentada
      p Una guía técnica para la elaboración documental, es un documento oficial en el que se establecen los criterios y lineamientos relacionados con la documentación, enmarcado en el Sistema de Gestión Documental; de esta forma, se garantiza la estandarización del proceso.
      p La guía debe contemplar elementos tales como:

    .row.justify-content-center.mb-5.mt-5
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/t4-img12.png", alt="alt")
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img3.png", alt="alt").numero
            .col
              h2 Objetivo 
              p.mt-2 Establece el propósito con el que fue formulada la guía. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img4.png", alt="alt").numero
            .col
              h2 Alcance
              p.mt-2 Determina su ámbito de aplicación.
        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img5.png", alt="alt").numero
            .col
              h2 Marco legal
              p.mt-2 Menciona la normativa gubernamental e interna a la que responde la guía.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img6.png", alt="alt").numero
            .col
              h2 Requisitos técnicos
              p.mt-2 Identifica los lineamientos sobre los cuales se construye la guía y orienta la documentación.
        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img7.png", alt="alt").numero
            .col
              h2 Términos y definiciones
              p.mt-2 Define un glosario que enmarca el sistema de gestión.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img8.png", alt="alt").numero
            .col
              h2 Documentos asociados 
              p.mt-2 Identifica los documentos asociados a la guía técnica. 
        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img9.png", alt="alt").numero
            .col
              h2 Responsables
              p.mt-2 Define las responsabilidades en relación con la revisión, aprobación y actualización documental.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img10.png", alt="alt").numero
            .col
              h2 Estructura documental
              p.mt-2 Establece la tipología de documentación que se produce por la organización que formula la guía (planes, guías, manuales, mapas de proceso, etc.).
        .crd.crd--avatarHorizontal2.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img11.png", alt="alt").numero
            .col
              h2 Revisión, aprobación y control de cambios
              p.mt-2 Formaliza la aplicación de la guía.
    .row.justify-content-center
      p La definición de una guía técnica para la elaboración documentada, asegura uniformidad en los criterios para el diseño, aprobación y posterior inclusión de documentos como parte del sistema de gestión en la organización, y es un elemento fundamental para la formalización de los procedimientos y procesamientos, como parte del archivo.

    .row.justify-content-around.align-items-center.mt-5
      .col-8    
        .cajon.color-secundario1.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
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
