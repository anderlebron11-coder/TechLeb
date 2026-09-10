// ========================================
// REFERENCIAS DEL FORMULARIO
// ========================================

const formulario = document.querySelector(".contact-form");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const servicio = document.querySelector("#servicio");
const mensaje = document.querySelector("#mensaje");

const modalidad = document.querySelector("#modalidad");
const zona = document.querySelector("#zona");

const equipo = document.querySelector("#equipo");
const tipoMantenimiento = document.querySelector("#tipo-mantenimiento");

const tipoExcel = document.querySelector("#tipo-excel");
const descripcionExcel = document.querySelector("#descripcion-excel");

const tipoWeb = document.querySelector("#tipo-web");
const funcionalidadesWeb = document.querySelector("#funcionalidades-web");


// ========================================
// MENÚ MÓVIL
// ========================================

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");


// ========================================
// GRUPOS DINÁMICOS DEL FORMULARIO
// ========================================

const grupoModalidad = document.querySelector("#grupo-modalidad");
const grupoZona = document.querySelector("#grupo-zona");
const grupoEquipo = document.querySelector("#grupo-equipo");

const grupoApple = document.querySelector("#grupo-apple");
const dispositivoApple = document.querySelector("#dispositivo-apple");

const grupoTipoMantenimiento =
    document.querySelector("#grupo-tipo-mantenimiento");

const grupoExcel = document.querySelector("#grupo-excel");
const grupoDescripcionExcel =
    document.querySelector("#grupo-descripcion-excel");

const grupoWeb = document.querySelector("#grupo-web");
const grupoFuncionalidadesWeb =
    document.querySelector("#grupo-funcionalidades-web");


// ========================================
// NOMBRES PARA MOSTRAR AL USUARIO
// ========================================

const nombresZonas = {
    puriscal: "Puriscal",
    "cerca-puriscal": "Zona cercana a Puriscal",
    "ciudad-colon": "Ciudad Colón",
    "santa-ana": "Santa Ana",
    escazu: "Escazú",
    consulta: "Consulta por otras zonas"
};


const nombresEquipos = {
    laptop: "Laptop",
    desktop: "Computadora de escritorio",
    "all-in-one": "All-in-One",

    ps4: "PS4",
    "ps4-pro": "PS4 Pro",
    ps5: "PS5",
    "ps5-slim": "PS5 Slim",
    "ps5-pro": "PS5 Pro",

    consola: "Consola",
    impresora: "Impresora",
    otro: "Otro",

    macbook: "MacBook",
    imac: "iMac",
    "mac-mini": "Mac mini",
    iphone: "iPhone",
    ipad: "iPad",
    "apple-watch": "Apple Watch"
};


const nombresMantenimiento = {
    limpieza: "Limpieza interna",
    "pasta-termica": "Cambio de pasta térmica",
    optimizacion: "Optimización",
    completo: "Mantenimiento completo",
    diagnostico: "Diagnóstico"
};


const nombresExcel = {
    reportes: "Reportes y tablas",
    dashboard: "Dashboard",
    formulas: "Fórmulas y funciones",
    automatizacion: "Automatización",
    "power-query": "Power Query",
    otro: "Otro"
};


const nombresWeb = {
    negocio: "Página para negocio",
    landing: "Landing page",
    portafolio: "Portafolio personal",
    tienda: "Tienda en línea",
    institucional: "Página institucional",
    otro: "Otro"
};


// ========================================
// OPCIONES DE EQUIPO
// ========================================

function actualizarOpcionesEquipo() {

    const servicioSeleccionado = servicio.value;

    if (servicioSeleccionado === "Mantenimiento de computadora") {

        equipo.innerHTML = `
            <option value="laptop">Laptop</option>
            <option value="desktop">Computadora de escritorio</option>
            <option value="all-in-one">All-in-One</option>
        `;

        grupoEquipo.querySelector("label").textContent = "Equipo";
    }


    else if (servicioSeleccionado === "Mantenimiento de consola") {

        equipo.innerHTML = `
            <option value="ps4">PS4</option>
            <option value="ps4-pro">PS4 Pro</option>
            <option value="ps5">PS5</option>
            <option value="ps5-slim">PS5 Slim</option>
            <option value="ps5-pro">PS5 Pro</option>
        `;

        grupoEquipo.querySelector("label").textContent = "Consola";
    }


    else if (servicioSeleccionado === "Reparación y soporte") {

        equipo.innerHTML = `
            <option value="laptop">Laptop</option>
            <option value="desktop">Computadora de escritorio</option>
            <option value="all-in-one">All-in-One</option>
            <option value="consola">Consola</option>
            <option value="impresora">Impresora</option>
            <option value="otro">Otro</option>
        `;

        grupoEquipo.querySelector("label").textContent = "Equipo";
    }
}


// ========================================
// OPCIONES DE MANTENIMIENTO
// ========================================

function actualizarOpcionesMantenimiento() {

    const servicioSeleccionado = servicio.value;

    if (servicioSeleccionado === "Mantenimiento de computadora") {

        tipoMantenimiento.innerHTML = `
            <option value="limpieza">Limpieza interna</option>
            <option value="pasta-termica">Cambio de pasta térmica</option>
            <option value="optimizacion">Optimización</option>
            <option value="completo">Mantenimiento completo</option>
        `;
    }


    else if (servicioSeleccionado === "Mantenimiento de consola") {

        tipoMantenimiento.innerHTML = `
            <option value="limpieza">Limpieza interna</option>
            <option value="pasta-termica">Cambio de pasta térmica</option>
            <option value="completo">Mantenimiento completo</option>
            <option value="diagnostico">Diagnóstico</option>
        `;
    }
}


// ========================================
// ACTUALIZAR FORMULARIO
// ========================================

function actualizarFormulario() {

    const servicioSeleccionado = servicio.value;


    // Ocultar todos los campos dinámicos

    grupoExcel.style.display = "none";
    grupoDescripcionExcel.style.display = "none";

    grupoWeb.style.display = "none";
    grupoFuncionalidadesWeb.style.display = "none";

    grupoEquipo.style.display = "none";
    grupoTipoMantenimiento.style.display = "none";

    grupoModalidad.style.display = "none";
    grupoZona.style.display = "none";

    grupoApple.style.display = "none";


    // ========================================
    // MANTENIMIENTO DE COMPUTADORA
    // ========================================

    if (servicioSeleccionado === "Mantenimiento de computadora") {

        grupoEquipo.style.display = "flex";
        grupoTipoMantenimiento.style.display = "flex";
        grupoModalidad.style.display = "flex";
        grupoZona.style.display = "flex";
    }


    // ========================================
    // MANTENIMIENTO DE CONSOLA
    // ========================================

    else if (servicioSeleccionado === "Mantenimiento de consola") {

        grupoEquipo.style.display = "flex";
        grupoTipoMantenimiento.style.display = "flex";
        grupoModalidad.style.display = "flex";
        grupoZona.style.display = "flex";
    }


    // ========================================
    // REPARACIÓN Y SOPORTE
    // ========================================

    else if (servicioSeleccionado === "Reparación y soporte") {

        grupoEquipo.style.display = "flex";
        grupoModalidad.style.display = "flex";
        grupoZona.style.display = "flex";
    }


    // ========================================
    // EXCEL
    // ========================================

    else if (servicioSeleccionado === "Excel y automatización") {

        grupoExcel.style.display = "flex";
        grupoDescripcionExcel.style.display = "flex";
    }


    // ========================================
    // PÁGINAS WEB
    // ========================================

    else if (servicioSeleccionado === "Creación de páginas web") {

        grupoWeb.style.display = "flex";
        grupoFuncionalidadesWeb.style.display = "flex";
    }


    // ========================================
    // APPLE
    // ========================================

    else if (servicioSeleccionado === "Soporte para dispositivos Apple") {

        grupoApple.style.display = "flex";
        grupoModalidad.style.display = "flex";
        grupoZona.style.display = "flex";
    }


    // Actualizar opciones

    actualizarOpcionesEquipo();
    actualizarOpcionesMantenimiento();
}


// ========================================
// CAMBIO DE SERVICIO
// ========================================

servicio.addEventListener(
    "change",
    actualizarFormulario
);


// Inicializar formulario

actualizarFormulario();


// ========================================
// DETALLE DE SERVICIOS
// ========================================

const serviceCards =
    document.querySelectorAll(".service-card");

const detalleServicio =
    document.getElementById("detalle-servicio");

const detalleIcono =
    document.getElementById("detalle-icono");

const detalleTitulo =
    document.getElementById("detalle-titulo");

const detalleDescripcion =
    document.getElementById("detalle-descripcion");

const detalleIncluye =
    document.getElementById("detalle-incluye");

const detalleIdeal =
    document.getElementById("detalle-ideal");

const detalleBoton =
    document.getElementById("detalle-boton");

let servicioActual = "computadora";


// ========================================
// INFORMACIÓN DE LOS SERVICIOS
// ========================================

const servicios = {

    computadora: {

        icono: "💻",

        titulo: "Mantenimiento de computadoras",

        descripcion:
            "Mantén tu equipo funcionando de forma rápida, estable y confiable.",

        incluye: [
            "Limpieza interna",
            "Cambio de pasta térmica",
            "Optimización del sistema",
            "Diagnóstico preventivo"
        ],

        ideal:
            "Laptops, computadoras de escritorio y equipos All-in-One.",

        nombreFormulario:
            "Mantenimiento de computadora"
    },


    consola: {

        icono: "🎮",

        titulo: "Mantenimiento de consolas",

        descripcion:
            "Mantenimiento preventivo para ayudar a mantener tu consola limpia y funcionando correctamente.",

        incluye: [
            "Limpieza interna",
            "Cambio de pasta térmica",
            "Mantenimiento completo",
            "Diagnóstico"
        ],

        ideal:
            "PS4, PS4 Pro, PS5, PS5 Slim y PS5 Pro.",

        nombreFormulario:
            "Mantenimiento de consola"
    },


    reparacion: {

        icono: "🛠️",

        titulo: "Reparación y soporte",

        descripcion:
            "Diagnóstico y solución de problemas tecnológicos en diferentes tipos de equipos.",

        incluye: [
            "Diagnóstico del problema",
            "Revisión del equipo",
            "Solución de problemas",
            "Soporte técnico"
        ],

        ideal:
            "Computadoras, consolas, impresoras y otros equipos tecnológicos.",

        nombreFormulario:
            "Reparación y soporte"
    },


    excel: {

        icono: "📊",

        titulo: "Excel y automatización",

        descripcion:
            "Transforma tareas repetitivas y datos complicados en soluciones más simples y eficientes.",

        incluye: [
            "Reportes y tablas",
            "Dashboards",
            "Fórmulas y funciones",
            "Automatización",
            "Power Query"
        ],

        ideal:
            "Personas y negocios que trabajan con información y necesitan optimizar sus procesos.",

        nombreFormulario:
            "Excel y automatización"
    },


    web: {

        icono: "🌐",

        titulo: "Creación de páginas web",

        descripcion:
            "Páginas web modernas y adaptadas a las necesidades de cada negocio o proyecto.",

        incluye: [
            "Diseño de la página",
            "Adaptación para celulares",
            "Secciones personalizadas",
            "Integración de funcionalidades"
        ],

        ideal:
            "Negocios, emprendimientos, profesionales y proyectos personales.",

        nombreFormulario:
            "Creación de páginas web"
    },


    apple: {

        icono: "🍎",

        titulo: "Soporte para dispositivos Apple",

        descripcion:
            "Diagnóstico, configuración y soporte para ayudarte a mantener tus dispositivos Apple funcionando correctamente.",

        incluye: [
            "Diagnóstico del dispositivo",
            "Configuración y puesta a punto",
            "Soporte para macOS y dispositivos Apple",
            "Revisión de problemas de software",
            "Orientación y soporte técnico"
        ],

        ideal:
            "MacBook, iMac, Mac mini, iPhone, iPad y otros dispositivos Apple.",

        nombreFormulario:
            "Soporte para dispositivos Apple"
    }
};


// ========================================
// MOSTRAR DETALLE DEL SERVICIO
// ========================================

function mostrarDetalleServicio(servicioSeleccionado) {

    // Quitar selección anterior

    serviceCards.forEach((card) => {
        card.classList.remove("selected");
    });


    const servicioData =
        servicios[servicioSeleccionado];


    if (!servicioData) {
        return;
    }


    // Guardar servicio actual

    servicioActual = servicioSeleccionado;


    // Marcar tarjeta seleccionada

    const tarjetaSeleccionada =
        document.querySelector(
            `.service-card[data-service="${servicioSeleccionado}"]`
        );


    if (tarjetaSeleccionada) {

        tarjetaSeleccionada.classList.add("selected");
    }


    // Actualizar contenido

    detalleIcono.textContent =
        servicioData.icono;

    detalleTitulo.textContent =
        servicioData.titulo;

    detalleDescripcion.textContent =
        servicioData.descripcion;

    detalleIdeal.textContent =
        servicioData.ideal;


    // Limpiar lista

    detalleIncluye.innerHTML = "";


    // Crear elementos de la lista

    servicioData.incluye.forEach((item) => {

        const li =
            document.createElement("li");

        li.textContent = item;

        detalleIncluye.appendChild(li);
    });


    // Mostrar sección

    detalleServicio.classList.add("active");


    // Desplazar hasta el detalle

    detalleServicio.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ========================================
// EVENTOS DE LAS TARJETAS
// ========================================

serviceCards.forEach((card) => {

    // Click

    card.addEventListener("click", () => {

        mostrarDetalleServicio(
            card.dataset.service
        );
    });


    // Teclado

    card.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            mostrarDetalleServicio(
                card.dataset.service
            );
        }
    });
});


// ========================================
// BOTÓN "SOLICITAR ESTE SERVICIO"
// ========================================

detalleBoton.addEventListener("click", () => {

    const servicioData =
        servicios[servicioActual];


    if (!servicioData) {
        return;
    }


    // Seleccionar servicio

    servicio.value =
        servicioData.nombreFormulario;


    // Actualizar formulario

    actualizarFormulario();


    // Enfocar nombre

    setTimeout(() => {

        nombre.focus();

    }, 500);
});


// ========================================
// ENVÍO DEL FORMULARIO
// ========================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    // ========================================
    // RECOPILAR INFORMACIÓN
    // ========================================

    const solicitud = {

        nombre:
            nombre.value.trim(),

        correo:
            correo.value.trim(),

        servicio:
            servicio.value,

        modalidad:
            modalidad.value,

        zona:
            zona.value,

        equipo:
            equipo.value,

        dispositivoApple:
            dispositivoApple.value,

        tipoMantenimiento:
            tipoMantenimiento.value,

        tipoExcel:
            tipoExcel.value,

        descripcionExcel:
            descripcionExcel.value.trim(),

        tipoWeb:
            tipoWeb.value,

        funcionalidadesWeb:
            funcionalidadesWeb.value.trim(),

        mensaje:
            mensaje.value.trim()
    };


    console.log("Solicitud:", solicitud);


    // ========================================
    // DETALLES DEL SERVICIO
    // ========================================

    let detallesServicio = "";


    // Computadora / consola

    if (
        solicitud.servicio ===
            "Mantenimiento de computadora" ||

        solicitud.servicio ===
            "Mantenimiento de consola"
    ) {

        detallesServicio = `

Equipo/Consola: ${
    nombresEquipos[solicitud.equipo] ||
    solicitud.equipo
}

Tipo de mantenimiento: ${
    nombresMantenimiento[solicitud.tipoMantenimiento] ||
    solicitud.tipoMantenimiento
}`;
    }


    // Apple

    else if (
        solicitud.servicio ===
        "Soporte para dispositivos Apple"
    ) {

        detallesServicio = `

Dispositivo Apple: ${
    nombresEquipos[solicitud.dispositivoApple] ||
    solicitud.dispositivoApple
}`;
    }


    // Reparación

    else if (
        solicitud.servicio ===
        "Reparación y soporte"
    ) {

        detallesServicio = `

Equipo: ${
    nombresEquipos[solicitud.equipo] ||
    solicitud.equipo
}`;
    }


    // Excel

    else if (
        solicitud.servicio ===
        "Excel y automatización"
    ) {

        detallesServicio = `

Tipo de trabajo: ${
    nombresExcel[solicitud.tipoExcel] ||
    solicitud.tipoExcel
}

¿Qué necesita realizar?: ${
    solicitud.descripcionExcel ||
    "No especificado"
}`;
    }


    // Web

    else if (
        solicitud.servicio ===
        "Creación de páginas web"
    ) {

        detallesServicio = `

Tipo de página: ${
    nombresWeb[solicitud.tipoWeb] ||
    solicitud.tipoWeb
}

Funcionalidades necesarias: ${
    solicitud.funcionalidadesWeb ||
    "No especificado"
}`;
    }


    // ========================================
    // DATOS GENERALES
    // ========================================

    const nombreZona =
        nombresZonas[solicitud.zona] ||
        solicitud.zona;

    const modalidadTexto =
        solicitud.modalidad ||
        "No especificado";


    // ========================================
    // MENSAJE PARA WHATSAPP
    // ========================================

    const mensajeWhatsApp = `Hola, TechLeb.

Nombre: ${solicitud.nombre}
Correo: ${solicitud.correo}

Servicio: ${solicitud.servicio}${detallesServicio}

Modalidad: ${modalidadTexto}
Zona: ${nombreZona}

Mensaje:
${solicitud.mensaje}`;


    console.log(
        "Mensaje WhatsApp:",
        mensajeWhatsApp
    );


    // ========================================
    // ABRIR WHATSAPP
    // ========================================

    const mensajeCodificado =
        encodeURIComponent(mensajeWhatsApp);

    const numeroWhatsApp =
        "50663832648";

    const urlWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


    console.log(
        "URL WhatsApp:",
        urlWhatsApp
    );


    window.open(
        urlWhatsApp,
        "_blank"
    );


    // ========================================
    // CONFIRMACIÓN
    // ========================================

    mensajeFormulario.textContent =
        `¡Gracias, ${solicitud.nombre}! Recibimos tu solicitud de ${solicitud.servicio}.`;


    // Limpiar formulario

    formulario.reset();


    // Restaurar campos

    actualizarFormulario();


    // Quitar mensaje después de 3 segundos

    setTimeout(() => {

        mensajeFormulario.textContent = "";

    }, 3000);
});


// ========================================
// ANIMACIÓN DE SERVICIOS
// ========================================

const observerServicios =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observerServicios.unobserve(
                        entry.target
                    );
                }
            });
        },
        {
            threshold: 0.15
        }
    );


// Observar tarjetas

serviceCards.forEach((card) => {

    observerServicios.observe(card);
});


// ========================================
// MENÚ MÓVIL
// ========================================

if (menuToggle && navLinks) {

    // Abrir / cerrar menú

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle(
            "mobile-open"
        );
    });


    // Cerrar menú al seleccionar una opción

    const enlacesMenu =
        navLinks.querySelectorAll("a");

    enlacesMenu.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            navLinks.classList.remove(
                "mobile-open"
            );
        });
    });
}
