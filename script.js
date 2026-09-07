const formulario = document.querySelector(".contact-form");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const servicio = document.querySelector("#servicio");
const mensaje = document.querySelector("#mensaje");

const modalidad = document.querySelector("#modalidad");
const zona = document.querySelector("#zona");

const precioEstimado = document.querySelector("#precio-estimado");

const grupoModalidad = document.querySelector("#grupo-modalidad");
const grupoZona = document.querySelector("#grupo-zona");


// ========================================
// PRECIOS
// ========================================

const precios = {

    "Mantenimiento de computadora": {

        puriscal: {
            normal: 15000,
            express: 20000
        },

        "cerca-puriscal": {
            normal: 17000,
            express: 22000
        },

        "ciudad-colon": {
            normal: 19000,
            express: 24000
        },

        "santa-ana": {
            normal: 21000,
            express: 26000
        },

        escazu: {
            normal: 22000,
            express: 27000
        }

    },


    "Mantenimiento de consola": {

        puriscal: {
            normal: 20000,
            express: 25000
        },

        "cerca-puriscal": {
            normal: 22000,
            express: 27000
        },

        "ciudad-colon": {
            normal: 24000,
            express: 29000
        },

        "santa-ana": {
            normal: 26000,
            express: 31000
        },

        escazu: {
            normal: 27000,
            express: 32000
        }

    },


    "Reparación y soporte": {

        puriscal: {
            normal: 10000,
            express: 15000
        },

        "cerca-puriscal": {
            normal: 12000,
            express: 17000
        },

        "ciudad-colon": {
            normal: 14000,
            express: 19000
        },

        "santa-ana": {
            normal: 16000,
            express: 21000
        },

        escazu: {
            normal: 17000,
            express: 22000
        }

    }

};


// ========================================
// NOMBRES DE LAS ZONAS
// ========================================

const nombresZonas = {

    "puriscal": "Puriscal",

    "cerca-puriscal": "Zona cercana a Puriscal",

    "ciudad-colon": "Ciudad Colón",

    "santa-ana": "Santa Ana",

    "escazu": "Escazú",

    "consulta": "Consulta por otras zonas"

};


// ========================================
// ACTUALIZAR FORMULARIO
// ========================================

function actualizarFormulario() {

    const servicioSeleccionado = servicio.value;

    const esCotizacion =
        servicioSeleccionado === "Excel y automatización" ||
        servicioSeleccionado === "Creación de páginas web";


    if (esCotizacion) {

        grupoModalidad.style.display = "none";
        grupoZona.style.display = "none";

    } else {

        grupoModalidad.style.display = "flex";
        grupoZona.style.display = "flex";

    }


    actualizarPrecio();

}


// ========================================
// ACTUALIZAR PRECIO
// ========================================

function actualizarPrecio() {

    const servicioSeleccionado = servicio.value;

    const modalidadSeleccionada =
        modalidad.value.toLowerCase();

    const zonaSeleccionada =
        zona.value;


    // Excel y páginas web
    if (
        servicioSeleccionado === "Excel y automatización" ||
        servicioSeleccionado === "Creación de páginas web"
    ) {

        precioEstimado.textContent =
            "Precio estimado: Solicitar cotización";

        return;

    }


    // Otras zonas
    if (zonaSeleccionada === "consulta") {

        precioEstimado.textContent =
            "Precio estimado: Consultar disponibilidad";

        return;

    }


    // Buscar precio
    const precio =
        precios[servicioSeleccionado]
        [zonaSeleccionada]
        [modalidadSeleccionada];


    precioEstimado.textContent =
        `Precio estimado: ₡${precio.toLocaleString("es-CR")}`;

}


// ========================================
// EVENTOS DEL FORMULARIO
// ========================================

servicio.addEventListener(
    "change",
    actualizarFormulario
);

modalidad.addEventListener(
    "change",
    actualizarPrecio
);

zona.addEventListener(
    "change",
    actualizarPrecio
);


// Ejecutar al cargar la página
actualizarFormulario();


// ========================================
// ENVÍO DEL FORMULARIO
// ========================================

formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Guardar información
        const solicitud = {

            nombre: nombre.value,

            correo: correo.value,

            servicio: servicio.value,

            modalidad: modalidad.value,

            zona: zona.value,

            mensaje: mensaje.value

        };


        console.log(solicitud);


        // ========================================
        // CALCULAR PRECIO PARA WHATSAPP
        // ========================================

        let precioTexto;

        let nombreZona;

        const esCotizacion =
            solicitud.servicio === "Excel y automatización" ||
            solicitud.servicio === "Creación de páginas web";


        if (esCotizacion) {

            precioTexto = "Solicitar cotización";

            nombreZona = "No aplica";

        }

        else if (solicitud.zona === "consulta") {

            precioTexto = "Consultar disponibilidad";

            nombreZona =
                nombresZonas[solicitud.zona];

        }

        else {

            const precio =
                precios[solicitud.servicio]
                [solicitud.zona]
                [solicitud.modalidad.toLowerCase()];


            precioTexto =
                `₡${precio.toLocaleString("es-CR")}`;


            nombreZona =
                nombresZonas[solicitud.zona];

        }


        // ========================================
        // MENSAJE DE WHATSAPP
        // ========================================

        const modalidadTexto =
            esCotizacion
                ? "No aplica"
                : solicitud.modalidad;


        const mensajeWhatsApp = `Hola, TechLeb.

Nombre: ${solicitud.nombre}
Correo: ${solicitud.correo}
Servicio: ${solicitud.servicio}
Modalidad: ${modalidadTexto}
Zona: ${nombreZona}
Precio estimado: ${precioTexto}

Mensaje:
${solicitud.mensaje}`;


        console.log(mensajeWhatsApp);


        // Codificar mensaje
        const mensajeCodificado =
            encodeURIComponent(mensajeWhatsApp);


        // Número de WhatsApp
        const numeroWhatsApp =
            "50663832648";


        // Crear URL
        const urlWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


        console.log(urlWhatsApp);


        // Abrir WhatsApp
        window.open(
            urlWhatsApp,
            "_blank"
        );


        // ========================================
        // MENSAJE DE CONFIRMACIÓN
        // ========================================

        mensajeFormulario.textContent =
            `¡Gracias, ${solicitud.nombre}! Recibimos tu solicitud de ${solicitud.servicio}.`;


        // Limpiar formulario
        formulario.reset();


        // Volver a mostrar los campos correctamente
        actualizarFormulario();


        // Borrar mensaje después de 3 segundos
        setTimeout(
            function() {

                mensajeFormulario.textContent = "";

            },
            3000
        );

    }
);