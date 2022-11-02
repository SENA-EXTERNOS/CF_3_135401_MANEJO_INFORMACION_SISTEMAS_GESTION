<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesos: secuencia e interacción

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="flip-right")
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/t3-img1.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 Es fundamental, que luego de conocer los métodos de codificación de un sistema de gestión documental, se requiera exponer los procesos de gestión, que son de gran importancia y emplean diversas técnicas y operaciones para la correcta administración del flujo de documentos internos y externos, los cuales hacen parte de los procesos de negocio en una organización.

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="flip-right")
      p A continuación, se introduce la información sobre los elementos que componen un proceso:
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/tema3/t3-img2.png", alt="Texto que describa la imagen" data-aos="zoom-in").mt-3.m-auto

    .row.justify-content-center
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--rosada").p-4
          .row(titulo="Secuencia de los procesos").p-4
            p El enfoque en los procesos requiere de la caracterización de los mismos, con el fin de identificar la cadena de interacciones y las características adecuadas para su gestión; de esta forma, se pretende dar cumplimiento a los objetivos estratégicos de la organización, sustentándolos con una lógica de identificación y gestión de riesgos, el aprovechamiento de oportunidades y la prevención de resultados no deseados. (ISO 9001:2015)
          .row(titulo="Interacción entre los procesos").p-4
            p Las organizaciones, al ser sistemas abiertos, se encuentran compuestas por múltiples actividades diseñadas para garantizar su correcto funcionamiento tanto a nivel interno, como externo. Dichas actividades que interactúan entre sí y comparten objetivos, suelen estar agrupadas en bloques. Es decir, una serie de actividades conectadas de manera coherente, componen un proceso y este, a su vez, tiene relaciones de interdependencia (alimenta o es alimentado) con otros procesos, tanto de la organización, como de entidades externas generando impacto en los resultados que se obtengan. La situación descrita nos demuestra que, se hace necesario realizar su caracterización, a través del diseño de un mapa de procesos.
          .row(titulo="Mapa de procesos").p-4
            p Al igual que existen relaciones entre las actividades empresariales, también se dan diversas relaciones entre los procesos; esta interrelación se constituye en el mapa de procesos de la organización y permite visualizarla como un todo y se puede evidenciar también, la manera en que el sistema se vería afectado ante una situación determinada.
            p El mapa de procesos permite representar y visualizar tanto los procesos, como sus interrelaciones. La tarea principal para diseñarlo adecuadamente, consiste en identificar y caracterizar los diferentes procesos de la empresa, estableciendo relaciones existentes entre sí, de acuerdo con la secuencia en que son ejecutados permitiendo, de esta manera, observar su estructura y condiciones en las que opera el sistema.

    .row.justify-content-around.align-items-center
      .col-8
        .cajon.color-secundario2.p-4.mt-3
          p(data-aos="fade-down") Antes de proceder con la definición y descripción de la estructura de procesos, es necesario realizar una clasificación de los mismos.
      
      p.mt-3 Para lo cual es importante tener en cuenta los siguientes criterios clarificadores:

    .row.justify-content-center
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/t3-img3.png' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Procesos operacionales:
          p.text-center son aquellos sobre los cuales se apoya la organización para asegurar su desempeño y el cumplimiento de su objeto del negocio.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/t3-img4.png' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Procesos estratégicos:
          p.text-center son aquellos que abarcan a todo el sistema y están orientados hacia la búsqueda de la mejora continua.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/t3-img5.png' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          h2.text-center.mt-5 Procesos de soporte
          p.text-center son aquellos sobre los que se sustenta el resto de los procesos y aportan coherencia a todo el conjunto.   

      .col-lg-9.mb-5.mb-lg-0
        .bloque-texto-b.color-primario5.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Finalmente, los procesos operacionales se presentan de forma secuencial de izquierda a derecha, de manera tal, que sea posible visualizar la estructura en que se encuentra encadenada la totalidad de los procesos que se desarrollan a nivel organizacional, permitiendo apreciar la cadena productiva como un todo, lo que asegura la creación de valor para la empresa y sus públicos de interés.
            br
            .row.justify-content-end
              p.text-bold.texto-alineado2 (Alonso. C, 2020)
            i.fas.fa-quote-right

    separador

    .row.justify-content-center
      #t_3_1.titulo-segundo.color-acento-botones
        h2 3.1. Medidas de dispersión y tipos de variables

      p Después de conocer la clasificación de los procesos dentro de la gestión documental, lo invitamos a ver el siguiente video, donde se nos amplía la temática de las especificidades de la información documentada.
      
      .video
        iframe(data-aos="fade-left" width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

      p.mt-3 El SGC de una empresa debe garantizar la disposición de la totalidad de la información documentada requerida por la norma ISO 9001; por tal motivo, se debe establecer como criterio obligatorio para garantizar el correcto funcionamiento del Sistema de Gestión de la Calidad.

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.color-secundario2.p-4.mt-3
          p(data-aos="fade-down") En caso de generación o actualización de la información documentada, la organización debe velar por la identificación, descripción, revisión de idoneidad y cumplimiento de los requisitos para su aprobación.

    separador

    .row.justify-content-center
      #t_3_2.titulo-segundo.color-acento-botones
        h2 3.2. Diagramas de flujo

    .row.justify-content-center
      p Teniendo en cuenta que los documentos que se integran al sistema de gestión documental tienen una utilidad para los diferentes procesos con los que interactúan, y que la esencia de los sistemas de gestión es el mejoramiento continuo, es importante desarrollar mecanismos que permitan su actualización, de acuerdo con acciones de mejora identificadas por los diferentes individuos o áreas organizacionales que los generan o hacen uso de la información que en ellos se consigna.
      p Algunos de los beneficios de un diagrama de flujo son:

    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/t3-img6.png', alt='Texto que describa la imagen').img_lineaTD2
          .col-lg-8
            LineaTiempoD
              .row(numero="1" titulo="Botón 1")
                  p.mt-2 Permite comprender los procesos y sus objetivos. Además, caracteriza las acciones de los mismos.

              .row(numero="2" titulo="Botón 2")
                  p.mt-2 Sintetiza el análisis de componentes de un proceso.

              .row(numero="3" titulo="Botón 3")
                  p.mt-2 Permite la comprensión global a partir de la visualización, proporcionando información específica para la identificación de posibles mejoras.

              .row(numero="4" titulo="Botón 4")
                  p.mt-2 Establece un punto de partida para la documentación de procesos y elaboración de procedimientos.

              .row(numero="5" titulo="Botón 5")
                  p.mt-2 Permite visualizar los pasos claves de un proceso y sus riesgos.

              .row(numero="6" titulo="Botón 6")
                  p.mt-2 Evidencia el valor y aporte de cada paso, en términos de efectividad.

              .row(numero="7" titulo="Botón 7")
                  p.mt-2 Ofrece participación e involucramiento de los responsables del proceso, en su construcción.

              .row(numero="8" titulo="Botón 8")
                  p.mt-2 Es una herramienta básica de análisis de procesos, a nivel organizacional.

    .row.justify-content-center
      .bloque-texto-b.color-primario1.p-4
        .bloque-texto-b__texto
          p.mb-0 Con el fin de establecer marcos comunes de entendimiento para este tipo de herramientas, se ha definido una serie de símbolos comúnmente aceptados, para la construcción de diagramas de flujo; esta serie fue propuesta por la ANSI, Instituto Nacional Estadounidense de Estándares (por sus siglas en inglés: American National Standards Institute); a continuación, se presenta una lista de los símbolos más utilizados:      

    .titulo-sexto.color-acento-botones
      .row
        p #[strong Figura. ]Ciclo de vida del dato
      
    .row.justify-content-center 
      .col-lg-9
        .tabla-b.color-acento-contenido
          table
            thead
              tr
                th.text-center #[stron Símbolo]
                th.text-center #[strong Significado]         
            tbody
              tr.bkg-intermedio 
                td        
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img7.png', alt='Texto que describa la imagen')
                td #[strong Operación:] se usa para describir cualquier actividad. En el interior del rectángulo se escribe una breve descripción de la actividad.
              tr
                td 
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img8.png', alt='Texto que describa la imagen')                
                td #[strong Límites del proceso:] indica el inicio y el final de un proceso. En el interior de la elipse, aparece la palabra inicio o fin.
              tr.bkg-intermedio
                td
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img9.png', alt='Texto que describa la imagen')                
                td #[strong Punto de decisión:] denota que en ese punto se toma una decisión. Las salidas del diamante siempre son dos y del tipo Sí/No.
              tr
                td
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img10.png', alt='Texto que describa la imagen')                
                td #[strong Movimiento:] muestra el movimiento de una salida entre distintos puntos de la organización.
              tr.bkg-intermedio
                td
                  .row.justify-content-center
                    .col-lg-6
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img11.png', alt='Texto que describa la imagen')                
                td #[strong Conector:] señala que la salida de ese proceso puede ser la entrada de otro (la letra indica el proceso de entrada).
              tr
                td
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img12.png', alt='Texto que describa la imagen')                
                td #[strong Dirección de flujo:] denota la dirección y el orden de los pasos del proceso.
              tr.bkg-intermedio
                td
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img13.png', alt='Texto que describa la imagen')                
                td #[strong Documento:] documento/registro.
              tr
                td
                td #[strong Listados:] listados/notas de trabajo acumulado, información referente a la actividad.
              tr.bkg-intermedio
                td
                  .row.justify-content-center
                    .col-lg-7
                      figure
                        img(src='@/assets/curso/temas/tema3/t3-img14.png', alt='Texto que describa la imagen')                
                td #[strong Base de datos:] punto de archivo donde se retiene temporalmente la información, en espera que se cumplan otras condiciones para continuar el proceso. Puede llevar asociada una tarea de administración de almacenamiento.

    separador                                                                                                                                             

    .row.justify-content-center
      #t_3_3.titulo-segundo.color-acento-botones
        h2 3.3. Herramientas ofimáticas para documentación de los procesos
    
    .row.justify-content-center
      p A continuación, profundizaremos en el tema sobre la existencia de diferentes herramientas que permiten realizar la gestión de procesos en las organizaciones; estas tienen como objetivo facilitar el diseño, almacenamiento, control y seguimiento, tanto de los procesos, como de la información documentada, vinculada al Sistema de Gestión. 

    .row.justify-content-around.aling-items-center.mt-5(data-aos="zoom-in")
      .col-lg-11
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .blq4.bloque-texto-g__img
            p.mt-5 #[strong Con el fin de seleccionar una herramienta idónea, que asegure la correcta gestión de los procesos, es necesario que la organización garantice el cumplimiento de los siguientes criterios:]
          .blq4.bloque-texto-g__texto.p-4
            ul.lista-ul.mb-3
              li 
                i.fas.fa-angle-right
                | Facilitar el diseño y creación de diagramas, con el fin de visualizar los flujos de proceso.
              li 
                i.fas.fa-angle-right
                | Diseñar los formularios que puedan ser editados y hacer uso de la información.
              li  
                i.fas.fa-angle-right
                | Contar con las herramientas de gestión de proceso, con almacenamiento en la nube.
              li 
                i.fas.fa-angle-right
                | Controlar las funciones, a través de perfiles y asignación de roles.
              li 
                i.fas.fa-angle-right
                | Tener interfaz con clave de seguridad, para el inicio de sesión.
              li  
                i.fas.fa-angle-right
                | Realizar integración con otras herramientas de gestión.
              li 
                i.fas.fa-angle-right
                | Contar con métricas de rendimiento, para los diferentes procesos de la organización.
              li  
                i.fas.fa-angle-right
                | Analizar los datos, con el fin de obtener información procesable.

    .row.justify-content-center.mt-3
      p Cada una de las herramientas tiene utilidades y aplicaciones diferentes y están disponibles en el mercado para que las organizaciones accedan a las que consideren más pertinentes, con base en sus características y las especificidades requeridas por sus sistemas de gestión. Al momento de elegir la más adecuada, es necesario verificar que cumpla con los criterios mencionados anteriormente, así como con su funcionalidad.
      p A continuación, se presentan algunas de las herramientas disponibles, junto con una breve descripción:

    .row.justify-content-around.aling-items-center.mt-5(data-aos="zoom-in")
      .col-lg-11    
        .row.justify-content-around.aling-items-center.mt-2
          .col-lg-5(data-aos="zoom-in").mb-3
            figure
              img(src='@/assets/curso/temas/tema3/t3-img15.png', alt='Texto que describa la imagen').m-auto

          .col-lg-7    
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--rosada")
              .row(titulo="Kissflow Process").p-4
                p Permite crear procesos workflows, para operaciones comerciales repetitivas o estructuradas.
              .row(titulo="Zoho Creator").p-4
                p Permite diseñar el flujo de trabajo de acuerdo con los objetivos, directrices e indicadores.
              .row(titulo="Bizagi").p-4
                p Facilita identificar, modelar, administrar y automatizar, operaciones comerciales.
              .row(titulo="Nintex").p-4
                p Facilita el traslado y automatización de procesos, a un ambiente digital.
              .row(titulo="Prime BPM").p-4
                p Permite aplicar recursos de administración, a los procesos comerciales.
              .row(titulo="FlowForma").p-4
                p Brinda integración de diferentes aplicativos, para la gestión de procesos.
              .row(titulo="Appian BPM Suite").p-4
                p Automatiza flujos de trabajo.
              .row(titulo="Comindware Tracker").p-4
                p Combina diferentes funciones enfocadas en la gestión de procesos y tareas.
              .row(titulo="ARIS Cloud").p-4
                p Agiliza los procesos y facilita la gestión de tareas.

</template>

<script>
export default {
  name: 'Tema3',
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
