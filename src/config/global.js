export default {
  global: {
    componenteFormativo: 'Documentos y procesos de la información documentada',
    descripcionCurso:
      'En este componente formativo se abordarán las temáticas y conceptos relacionados con la gestión documental, así como también los mecanismos y herramientas para el diseño e implementación de un sistema de gestión documental en una organización, en busca de la generación de competencias relacionadas con la caracterización, diseño, gestión y control de documentos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documento: tipos y técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de codificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procesos: secuencia e interacción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Medidas de dispersión y tipos de variables',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Diagramas de flujo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Herramientas ofimáticas para documentación de los procesos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ley de archivo vigente (Archivo General de la Nación)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Documento: tipo y técnicas',
      referencia:
        'Gestión Documental. (2021). <i>Qué es un Documento - Tipos de Documentos</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=B2SboA2J4ds',
    },
    {
      tema: 'Documento: tipo y técnicas',
      referencia:
        'ISO Academy. (2021). <i>Norma ISO 9001:2015 7.5.3 Control de la información documentada Control de documentos y Registros</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gPUJ9vDLbg8',
    },
    {
      tema: 'Documento: tipo y técnicas',
      referencia:
        'BEIRA Training. (2019). <i>INFORMACIÓN DOCUMENTADA y TIPOS DE DOCUMENTOS – ISO 9001 – ISO 22000</i>(video). YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kyPByMoflDI',
    },
    {
      tema: 'Diagramas de flujo',
      referencia:
        'Cogollo, J. (2020). <i>¿Qué es un diagrama de flujo? – Cómo hacer Diagramas de flujo paso a paso</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kucgc6NpGwc',
    },
    {
      tema: 'Ley de archivo vigente (Archivo General de la Nación)',
      referencia:
        'Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. Julio 14 de 2000.',
      tipo: 'Ley',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
  ],
  glosario: [
    {
      termino: 'Alta dirección',
      significado:
        'persona o equipo de personas que dirigen la organización y son responsables de la implementación de la estrategia y de la inclusión de los sistemas de gestión.',
    },
    {
      termino: 'Documentación',
      significado:
        'proceso que consiste en documentar; se sustenta en el procesamiento de información que otorgará datos esenciales para la organización y se constituye en la base de los sistemas de gestión.',
    },
    {
      termino: 'Documentos',
      significado:
        'elementos que se constituyen en un soporte central de la estructura organizacional, contienen políticas, procesos, procedimientos, instrucciones, además de aquello que está y no está permitido.',
    },
    {
      termino: 'Flujo de proceso',
      significado:
        'serie de pasos necesarios para llevar a cabo un proceso en la organización, establece los responsables y las interacciones necesarias para alcanzar los objetivos.',
    },
    {
      termino: 'Implementación',
      significado:
        'establece la realización de determinados procesos y estructuras necesarios para la puesta en marcha de un sistema de gestión.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso que permite identificar riesgos para los procedimientos organizacionales y formular acciones que permitan mitigarlos.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'método para la realización de las acciones vinculadas a un proceso de la organización.',
    },
    {
      termino: 'Registros',
      significado:
        'son las evidencias documentales de las tareas realizadas en el marco de los procesos que abarca el sistema de gestión.',
    },
    {
      termino: 'SGD',
      significado:
        'conjunto de normas definidas y aplicadas en la recepción, generación, almacenamiento y gestión de los documentos estratégicos, para los procesos que desarrolla una organización.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso que implica recolectar y analizar información con el fin de seleccionar cursos de acción en busca del bienestar organizacional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso, C. (2020). <em>Mapa de procesos de una organización, ¿qué es y cómo se elabora?</em> Global Suite Solutions.',
      link:
        'https://www.globalsuitesolutions.com/es/que-es-mapa-de-procesos-y-como-se-elabora/',
    },
    {
      referencia:
        'ATS Gestión Documental. (2019). <em>Conoce los 8 pasos de la gestión documental en archivo.</em>',
      link: 'https://atsgestion.net/gestion-documental-en-archivo/',
    },
    {
      referencia:
        'ATS Gestión Documental. (s.f.). <em>¿Qué son las Tablas de Retención Documental (TRD)?</em>',
      link: 'https://atsgestion.net/tablas-retencion-documental/ ',
    },
    {
      referencia:
        'Ayudaley. (s.f.). <em>¿Qué es el control de documentos?</em>',
      link: 'https://ayudaleyprotecciondatos.es/2020/05/18/control-documentos/',
    },
    {
      referencia:
        'Cruz Mundet, J. R. (2012). Archivística. Gestión de documentos y administración de archivos. Alianza Editorial.',
      link:
        'https://www.academia.edu/38644922/Jos%C3%A9_Ram%C3%B3n_Cruz_Mundet_Archiv%C3%ADstica_Gesti%C3%B3n_de_documentos_y_administraci%C3%B3n_de_archivos',
    },
    {
      referencia:
        'Nueva ISO 9001:2015 (2019). <em>¿Cómo controlar los documentos externos en ISO 9001?</em>',
      link:
        'https://www.nueva-iso-9001-2015.com/2019/02/como-controlar-los-documentos-externos-en-iso-9001/',
    },
    {
      referencia:
        'Torres, I. (s.f.). <em>Diagrama de Flujo, una herramienta infalible para visualizar, esquematizar y mejorar tus procesos.</em> IVE Consultores.',
      link: 'https://iveconsultores.com/diagrama-de-flujo/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
