export const menuNavList = [
  {
    name: "Gestión del Sistema",
    icon: "SystemManagement",
    subMenu: [
      { name: "Roles y Funciones", route: "Roles y Funciones" },
      { name: "Formulario Registro de Usuarios", route: "Formulario Registro de Usuarios" },
    ],
    subMenuVisible: false
  },
  {
    name: "Gestión del Usuario",
    icon: "",
    subMenu: [
      { name: "Crear usuario (individual)", route: "Crear usuario (individual)" },
      { name: "Crear y actualizar usuarios (masivo)", route: "Crear y actualizar usuarios (masivo)" },
      { name: "Consultar y gestionar usuarios", route: "Consultar y gestionar usuarios" },
    ],
    subMenuVisible: false
  },
  {
    name: "Gestión de programas",
    icon: "",
    subMenu: [
      { name: "Información general", route: "Información general" },
      {
        name: "Secciones", route: "Secciones",
        subMenu: [
          { name: "Banner principal", route: "Banner principal" },
          { name: "Noticias", route: "Noticias" },
          { name: "Widgets", route: "Widgets" },
          { name: "Pop-ups de Bienvenida", route: "Pop-ups de Bienvenida" },
        ]
      }
    ],
    subMenuVisible: false  // Submenu inicialmente oculto
  },
  {
    name: "Gestión de misiones",
    icon: "",
    subMenu: [
      { name: "Crear misión", route: "Crear misión" },
      { name: "Misiones activas", route: "Misiones activas" },
      { name: "Misiones cerradas", route: "Misiones cerradas" },
      { name: "Calificar misiones", route: "Calificar misiones" },
    ],
    subMenuVisible: false
  },
  {
    name: "Gestión de estilos y presentación",
    icon: "",
    subMenu: [
      { name: "Diseños de sistemas", route: "Diseños de sistemas" },
      { name: "Configurar pie de página", route: "Configurar pie de página" },
    ],
    subMenuVisible: false
  },
];
