<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Documento: tipos y técnicas

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="flip-right")
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/t1-img1.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 Para comenzar, es importante conocer que los sistemas de gestión definen documento como el conjunto de elementos que se constituyen en un soporte central de la estructura organizacional, y que, además, contienen políticas, procesos, procedimientos, instrucciones y todo aquello que está y no está permitido. También, permiten la trazabilidad de información histórica, informes de auditoría, resultados de acciones, de monitoreo y seguimiento.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Tipos de documentos y registros
      p Dependiendo de las características del elemento utilizado para salvaguardar y transferir la información, se establecen diferentes tipos de clasificación de documentos, para los cuales Cruz Mundet (2012), define los siguientes:

      ImagenInfografica.color-acento-botones.mt-5
        template(v-slot:imagen)
          figure
            img(data-aos="flip-left" src='@/assets/curso/temas/tema1/t1-img2.png', alt='Texto que describa la imagen')

        .tarjeta.estilo-cajon.p-3(x="31.7%" y="8.5%" numero="1")
          .h5.mb-2 Textuales:
          p son los documentos más comunes, su característica general es la inclusión de texto escrito.
        
        .tarjeta.estilo-cajon.p-3(x="56.5%" y="9.5%" numero="2")
          .h5.mb-2 Iconográficos:
          p se valen de elementos gráficos para representar la información que en ellos se contiene (mapas, planos, dibujos, fotografías, diapositivas, transparencias, etc.).

        .tarjeta.estilo-cajon.p-3(x="21.7%" y="39.2%" numero="3")
          .h5.mb-2 Sonoros:
          p comprende elementos en los que se alberga información en formato de audio, bien sea formato análogo o digital.

        .tarjeta.estilo-cajon.p-3(x="45.7%" y="39.2%" numero="4")
          .h5.mb-2 Audiovisuales:
          p son elementos que contienen información que combina audio, imagen y movimiento. 

        .tarjeta.estilo-cajon.p-3(x="69.4%" y="39.2%" numero="5")
          .h5.mb-2 Electrónicos o informáticos:
          p son documentos generados por procesamiento en computador y se valen de almacenamiento físico (CD-ROM, memoria o disco duro) o virtual (almacenamiento en la nube).

        .tarjeta.estilo-cajon.p-3(x="33.6%" y="72.5%" numero="6")
          .h5.mb-2 Documentos públicos: 
          p son documentos expedidos por alguna organización o funcionario público.

        .tarjeta.estilo-cajon.p-3(x="57.5%" y="72.7%" numero="7")
          .h5.mb-2 Documentos privados: 
          p son documentos expedidos por personas jurídicas o naturales, que no cumplan funciones públicas. 

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Tipos de documentos y registros

    .row.justify-content-around.align-items-center
      .col-9
        .cajon.cajon.cajon.color-secundario1.p-4.mt-2
          p Luego de conocer los tipos de documentos y con el fin de garantizar una correcta gestión documental, se hace fundamental el cumplimiento de algunos elementos, según la técnica de elaboración.          

    .row.justify-content-center.mt-5
      p Estos elementos son:

      SlyderF.custom.mb-5(columnas="col-lg-4")(data-aos="fade-left").text-center
        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img3.png", alt="alt").img100.m-auto   
            h3.mt-3 Planeación
            p Proceso previo enfocado al diseño del sistema, de acuerdo con las características y necesidades de la organización específica y sus necesidades de gestión documental.
        
        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img4.png", alt="alt").img100.m-auto   
            h3.mt-3 Producción
            p Estructuración de las categorías documentales y sistematización de los documentos, de acuerdo con los criterios previamente definidos

        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img5.png", alt="alt").img100.m-auto   
            h3.mt-3 Gestión y trámite
            p Análisis y definición del flujo de procesos para cada documento, sus interacciones y formas adecuadas de uso en el contexto de la organización.

        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img6.png", alt="alt").img100.m-auto   
            h3.mt-3 Organización
            p Definición de categorías, valoración, características y responsables del almacenamiento documental.

        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img7.png", alt="alt").img100.m-auto   
            h3.mt-3 Transferencia
            p Políticas de transferencia de los archivos con base en las tablas de valoración documental.

        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img8.png", alt="alt").img100.m-auto   
            h3.mt-3 Disposición
            p Establecimiento de los procesos de selección, valoración, conservación, ciclo de vida de los documentos y disposiciones para su eliminación.

        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img9.png", alt="alt").img100.m-auto   
            h3.mt-3 Preservación
            p Definición de criterios para disponer los documentos a largo plazo, garantizando su conservación y buen estado.

        .tarjeta.tarjeta--slyder.p-4
          .row.justify-content-center
            .col-8
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/tema1/t1-img10.png", alt="alt").img100.m-auto   
            h3.mt-3 Valoración
            p Determinación del grado de relevancia de los documentos y los criterios para su disposición en el tiempo.

    .row.justify-content-center
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Técnicas de actualización
      p Teniendo en cuenta que los documentos que se integran al sistema de gestión documental tienen una utilidad para los diferentes procesos con los que interactúan, y que la esencia de los sistemas de gestión es el mejoramiento continuo, es importante desarrollar mecanismos que permitan su actualización, de acuerdo con acciones de mejora identificadas por los diferentes individuos o áreas organizacionales que los generan o hacen uso de la información que en ellos se consigna.

    .row.justify-content-around.aling-items-center.mt-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .blq.bloque-texto-g__img
            p #[strong Para esto, es necesario establecer protocolos que permitan que, una vez identificadas las acciones de mejora, se pueda generar un flujo de proceso encaminado a la actualización e inclusión de manera formal como parte del SG (Sistema de Gestión); para originarlo es necesario determinar los siguientes aspectos:]
          .blq.bloque-texto-g__texto.p-4
            ul.lista-ul.mb-3
              li 
                i.fas.fa-angle-right
                | Actores vinculados al documento.
              li 
                i.fas.fa-angle-right
                | Temporalidad de revisión documental.
              li  
                i.fas.fa-angle-right
                | Proceso de identificación de oportunidades de actualización.
              li 
                i.fas.fa-angle-right
                | Flujo de propuesta y aprobación del documento.
              li 
                i.fas.fa-angle-right
                | Formato de actualización.
              li  
                i.fas.fa-angle-right
                | Áreas que validan el proceso y lo formalizan.
              li 
                i.fas.fa-angle-right
                | Mecanismos de formalización.
              li  
                i.fas.fa-angle-right
                | Medios de divulgación y apropiación.            

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.cajon.cajon.color-secundario1.p-4.mt-5
          p Los anteriores elementos deberán ser tenidos en cuenta en el documento denominado “Procedimiento de Actualización Documental”, el cual cumplirá con el requisito de estar debidamente codificado e integrado al sistema de gestión documental, aclarando el flujo de proceso y los criterios que deben ser cumplidos con el objetivo de garantizar la realización exitosa del proceso de actualización.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Técnicas de control de documentos
      p Como parte de la gestión documental, es necesario establecer criterios que permitan garantizar el control a los documentos que se integran al SGD (Sistema de Gestión Documental); para lograrlo, es importante que la organización se plantee una serie de interrogantes que le permitirán verificar la pertinencia de los documentos que deben ser examinados y controlados.
      p A continuación, se presenta una serie de preguntas orientadoras para realizar el proceso de manera exitosa:


    .row.justify-content-center.mt-5
      .col-lg-11
        .row
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/t1-img11.png', alt='Texto que describa la imagen').img_lineaTD
          .col-lg-7
            TabsA.color-secundario
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="A")
                .row
                  p ¿El documento permite orientar los procesos productivos o la prestación de servicios de la organización?
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="B")
                .row
                  p ¿Acepta orientar los procesos de verificación, inspección o prueba de los productos o servicios desarrollados por la organización?         
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="C")
                .row
                  p ¿Establece requisitos relacionados con el cliente, los productos y/o servicios?
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="D")
                .row
                  p ¿Es útil para realizar el control de procesos?
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="E")
                .row
                  p ¿Facilita la toma de decisiones por parte del personal de producción?
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="F")
                .row
                  p ¿Admite recopilar información útil para la toma de decisiones futuras, relacionadas con el alcance del sistema de gestión (como son los formularios)?
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="G")
                .row
                  p ¿En caso de no ser actualizada, la información contenida en el documento representaría un riesgo para la organización y/o sus clientes?
              .tarjeta.p-4(style="background-color:#FDF5AF" titulo="H")
                .row
                  p ¿Tiene alguna relación con los requisitos del sistema de gestión?

    .row.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.color-primario3.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 En caso de responder afirmativamente a alguno de los cuestionamientos anteriores, es necesario establecer mecanismos de control del documento y, de esta forma, identificar y mitigar todas las situaciones de riesgo relacionadas con la gestión de este tipo de documentos
            br
            .row.justify-content-end
              p.text-bold.texto-alineado (Ayudaley, s.f.).
            i.fas.fa-quote-right

    .row.justify-content-center
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Técnicas de control de documentos
      p El control documental deberá asegurar el cumplimiento de una serie de acciones que se llevan a cabo de manera periódica.

    .row.justify-content-around.align-items-center
      .col-9
        .cajon.cajon.cajon.color-secundario1.p-4
          p Para garantizar su efectividad, se deben tener en cuenta las siguientes acciones según #[strong Ayudaley (s.f.).]

    .tarjeta.tarjeta--tiempo.p-4(data-aos="fade-right").mt-5
      LineaTiempoC.color-primario(text-small).p-3
        .row.justify-content-center.align-items-start(titulo="Control de documentos").lt-c-ubicacion-interna-1
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/t1-img12.png', alt='')        
              .col-lg-7
                p En el control de documentos se debe:
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Definir los mecanismos relacionados con el control de documentos.
                  li 
                    i.fas.fa-angle-right
                    | Establecer los criterios que permitan revisar, actualizar y aprobar los documentos. 
                  li  
                    i.fas.fa-angle-right
                    | Realizar una revisión periódica de los documentos para validar su pertinencia y validez y, de esta forma, ajustarlos, aprobarlos, o declararlos obsoletos.
                  li 
                    i.fas.fa-angle-right
                    | Realizar una definición de procesos de auditoría interna de revisión documental. 
                  li 
                    i.fas.fa-angle-right
                    | Planificar y programar auditorías (abarcar la totalidad de documentos incluidos en el SG). 
        .row.justify-content-center.align-items-start(titulo="Documentos externos").lt-c-ubicacion-interna-2
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/t1-img13.png', alt='')        
              .col-lg-7
                p Abarca los documentos provenientes de entidades externas a la organización, pero que tienen alguna relación con los procesos de gestión en que se tiene implementado el SG; entre estos se destacan:
                ul.lista-ul.mb-3
                  li 
                    i.fas.fa-angle-right
                    | Manuales de operación o solución de problemas relacionados con los equipos provenientes de los fabricantes.
                  li 
                    i.fas.fa-angle-right
                    | Procedimientos de prueba, especificaciones y planos de ingeniería publicados por clientes u otros organismos.
                  li  
                    i.fas.fa-angle-right
                    | Instrucciones, especificaciones y procedimientos provenientes de los proveedores.
                  li 
                    i.fas.fa-angle-right
                    | Normas publicadas por gremios o asociaciones que sean aplicables en la organización que implementa el SG.
                  li 
                    i.fas.fa-angle-right
                    | Normas de carácter internacional a las que se acoge la organización, como las ISO.
                p Una vez identificados los documentos externos, la organización debe establecer los criterios para su control en el marco del sistema de gestión; además se debe formular una lista de distribución, con el fin de determinar la ruta que siguen al interior de la organización y los criterios para su almacenamiento, dado que, en la mayoría de los casos, estos documentos son recibidos en formato físico y es necesario tener identificada su ubicación.                
        .row.justify-content-center.align-items-start(titulo="Documentos obsoletos").lt-c-ubicacion-interna-3
          .col-lg-10
            .row        
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/t1-img14.png', alt='')        
              .col-lg-7
                p Es necesario que la organización defina criterios para identificar e individualizar los documentos obsoletos, con el fin de instaurar rutas de acción que permitan evitar riesgos derivados de su uso; para establecerlas, es necesario tener en cuenta los siguientes criterios:
                ul.lista-ul.mb-3
                  li 
                    i.fas.fa-angle-right
                    | Mitigar el riesgo de uso involuntario.
                  li 
                    i.fas.fa-angle-right
                    | Identificación y disposición en caso de ser conservados.
                p Con el fin de evitar hacer un uso involuntario de los documentos obsoletos, es necesario definir mecanismos y criterios que eviten la circulación de este tipo de documentos al interior de la organización; para ello es necesario establecer y socializar listas de distribución de la documentación, debido a que, de esta forma, se puede garantizar su identificación oportuna, así como también la efectividad en su gestión.
                p En caso de requerir el uso de algunos documentos obsoletos, como insumo para la realización de seguimientos comparativos a lo largo de líneas de tiempo, la organización deberá establecer rótulos para identificarlos y que de esta forma se manifieste clara su condición de obsolescencia.
                
        .row.justify-content-center.align-items-start(titulo="Componentes de la<br>hoja de<br> control de documentos").lt-c-ubicacion-interna-4
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/t1-img15.png', alt='')        
              .col-lg-7
                p Posterior a la selección del sistema de gestión documental, es necesario definir los criterios para su operación; en ellos se deben incluir características como nombre, forma de archivo y almacenamiento; de esta manera se espera dar fluidez al sistema y a sus procesos de administración documental.
                p Algunos criterios que se encuentran relacionados con el archivo de documentos, se mencionan a continuación:
                ul.lista-ul.mb-3
                  li 
                    i.fas.fa-angle-right
                    | Nombre del proyecto.
                  li 
                    i.fas.fa-angle-right
                    | Nombre del equipo.
                  li  
                    i.fas.fa-angle-right
                    | Marco de tiempo. 
                  li 
                    i.fas.fa-angle-right
                    | Tema.
                  li 
                    i.fas.fa-angle-right
                    | Combinación de los anteriores.
                p Se recomienda establecer una nomenclatura para los documentos del sistema, con el fin de facilitar los procesos de identificación y revisión, evitando conflictos en las búsquedas y/o actualizaciones de las versiones de documentos incluidos en el sistema. La nomenclatura debe ser clara, coherente y socializada entre los miembros de la organización.
                p La denominación de los documentos puede variar en relación con su origen (proveedores, clientes, personal, etc.).
                p La hoja de control de documentos debe indicar los siguientes aspectos:
                ul.lista-ul.mb-3
                  li 
                    i.fas.fa-angle-right
                    | Nombre del autor del documento.
                  li 
                    i.fas.fa-angle-right
                    | Nombre de quien verifica el documento y sus datos.
                  li  
                    i.fas.fa-angle-right
                    | Nombre de quien aprueba el documento y la fecha.
                  li 
                    i.fas.fa-angle-right
                    | Estado del documento (válido, borrador, en revisión, en espera de aprobación).
                  li 
                    i.fas.fa-angle-right
                    | El número de revisión del documento.
                  li 
                    i.fas.fa-angle-right
                    | Autorización (copia controlada / registrada, o impresión autorizada).

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Información documentada externa
      p Considerando que existen documentos de origen externo que ingresan a la organización y que tienen relación con los diferentes procesos que en ella se desarrollan, es necesario que el SGD los contemple y los incluya como parte del flujo de la gestión documental, para que, de esta forma, sean caracterizados, identificados y puedan ser tenidos en cuenta para el proceso de análisis de información y toma de decisiones. La organización deberá identificar y determinar los registros externos de relevancia y definir las reglas para su control.

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.cajon.cajon.color-secundario2.p-4.mt-3
          p(data-aos="fade-down") Los documentos de origen externo, de relevancia para el sistema de gestión documental, pueden contener aspectos como especificaciones logísticas y de producto, hojas de datos de materiales, legislación, normativa, reglamentos externos, instrucciones, entre otros. La organización puede registrar los documentos externos, incluyendo en ellos información como la que se presenta a continuación:

    .row.justify-content-around.aling-items-center.mt-5(data-aos="zoom-in")
      .col-lg-10
        .blq2.bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .blq2.bloque-texto-g__img
            ul.lb.lista-ul.mb-5.mt-5
              li 
                i.fas.fa-angle-right
                | Nombre del documento.
              li 
                i.fas.fa-angle-right
                | Emisor del documento.
              li 
                i.fas.fa-angle-right
                | Versión y fecha actualizadas.
              li 
                i.fas.fa-angle-right
                | Distribución interna.
              li 
                i.fas.fa-angle-right
                | Responsabilidad de control.                                               

          .blq2.bloque-texto-g__texto.p-4
            p Los documentos de origen externo, de relevancia para el sistema de gestión documental, pueden contener aspectos como especificaciones logísticas y de producto, hojas de datos de materiales, legislación, normativa, reglamentos externos, instrucciones, entre otros. La organización puede registrar los documentos externos, incluyendo en ellos información como la que se presenta a continuación:

    .row.justify-content-center.mt-5
      p El reglamento de gestión de documentos externos, debe contemplar aspectos tales como:

    .row.justify-content-around.aling-items-center.mt-2
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/t1-img16.png', alt='Texto que describa la imagen').m-auto

      .col-lg-7    
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris").p-4
          .row(titulo="El Control").p-4
            p El control de cambios y pertinencia de los mismos, así como su vigencia y el impacto que los cambios realizados por el emisor, puedan tener en los procesos internos; una vez definidos, es posible diseñar una matriz de relación entre la empresa, los procesos de gestión documental y los emisores de los documentos externos.
          .row(titulo="Documentos").p-4
            p Documentos de origen externo que sean relevantes.
          .row(titulo="Responsabilidad").p-4
            p Responsabilidad y frecuencia en la verificación de cambios y publicación de documentos externos.
          .row(titulo="Acciones").p-4
            p Acciones por realizar en caso de cambios o aparición de nuevos documentos.
            ul.lv.lista-ul.mb-5.ps-5
              li
                i.fas.fa-check
                | Obtener nuevas versiones o documentos.
              li 
                i.fas.fa-check
                | Actualizar registros.
              li 
                i.fas.fa-check
                | Distribuir nueva versión o nuevo documento.
              li 
                i.fas.fa-check
                | Verificar su aplicabilidad.
              li 
                i.fas.fa-check
                | Cambios de plan.        
              li 
                i.fas.fa-check
                | Implementar cambios.
              li 
                i.fas.fa-check
                | Confirmar la implementación de cambios.                                     

    .row.justify-content-center.mt-5
      p La práctica adecuada del control de documentos externos, brinda efectividad a la gestión documental y a los procesos organizacionales que esta abarca, evitando dificultades, reprocesos y sobrecostos.

      .col-10
        .cajon.cajon.cajon.color-secundario1.p-4.mt-5
          p Teniendo en cuenta la dinámica empresarial, el desarrollo de redes de trabajo y la interconexión de procesos, la interdependencia de los procesos cobra cada vez mayor importancia en el contexto de la gestión organizacional y, por ende, en la gestión documental, motivo por el cual un SGD que no contemple la documentación externa, estará incompleto y dará apertura a la aparición de sesgos en la toma de decisiones. (ISO 9001:2015, 2019)


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
