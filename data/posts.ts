export interface Post {
  slug: string
  titulo: string
  categoria: string
  extracto: string
  cover: string
  fecha: string
  contenido: string
}

export const POSTS: Post[] = [
  {
    slug: "sin-gastos-comunes-en-la-practica",
    titulo: "Sin gastos comunes en la práctica",
    categoria: "Producto",
    extracto: "Qué significa realmente vivir sin gastos comunes y cómo impacta tu presupuesto mensual.",
    cover: "/apartment-building-exterior-modern.jpg",
    fecha: "2025-01-15",
    contenido: `
      <h2>¿Qué son los gastos comunes?</h2>
      <p>Los gastos comunes son pagos mensuales que cubren mantención de áreas compartidas, administración, seguridad y servicios del edificio.</p>
      
      <h2>Vivir sin gastos comunes</h2>
      <p>En San Patricio, cada unidad tiene rol independiente. No hay áreas comunes que mantener, lo que significa:</p>
      <ul>
        <li>Costo mensual predecible</li>
        <li>No hay sorpresas por reparaciones del edificio</li>
        <li>Pagas solo tus consumos individuales</li>
      </ul>
      
      <h2>Impacto en tu presupuesto</h2>
      <p>Un departamento típico en Santiago puede tener gastos comunes de $80.000 a $150.000 mensuales. En 10 años, eso suma entre $9.6M y $18M de pesos.</p>
    `,
  },
  {
    slug: "rol-independiente-salida-por-unidad",
    titulo: "Rol independiente: salida por unidad",
    categoria: "Inversión",
    extracto: "Cómo el rol independiente te da flexibilidad total para vender cuando quieras.",
    cover: "/property-documents-legal-papers.jpg",
    fecha: "2025-01-10",
    contenido: `
      <h2>¿Qué es el rol independiente?</h2>
      <p>Cada unidad tiene su propio rol de avalúo fiscal, independiente de las demás. Esto significa que puedes vender tu propiedad sin depender de decisiones de otros propietarios.</p>
      
      <h2>Ventajas para inversionistas</h2>
      <ul>
        <li>Venta individual sin restricciones</li>
        <li>No necesitas acuerdo de copropietarios</li>
        <li>Proceso de venta más rápido</li>
        <li>Mayor liquidez del activo</li>
      </ul>
    `,
  },
  {
    slug: "como-leer-tu-simulacion",
    titulo: "Cómo leer tu simulación",
    categoria: "Proceso",
    extracto: "Guía paso a paso para entender los números de tu simulación de crédito hipotecario.",
    cover: "/calculator-financial-planning.jpg",
    fecha: "2025-01-05",
    contenido: `
      <h2>Componentes de la simulación</h2>
      <p>Una simulación hipotecaria incluye:</p>
      <ul>
        <li><strong>Precio en UF:</strong> Valor de la propiedad</li>
        <li><strong>Pie (%):</strong> Tu aporte inicial</li>
        <li><strong>Monto a financiar:</strong> Lo que pide el banco</li>
        <li><strong>Tasa:</strong> Interés anual del crédito</li>
        <li><strong>Plazo:</strong> Años para pagar</li>
        <li><strong>Dividendo:</strong> Cuota mensual en CLP</li>
      </ul>
      
      <h2>Ejemplo práctico</h2>
      <p>Unidad de 2.200 UF con 20% de pie a 25 años:</p>
      <ul>
        <li>Pie: 440 UF (~$16M)</li>
        <li>Financiamiento: 1.760 UF</li>
        <li>Dividendo estimado: ~$650.000/mes</li>
      </ul>
    `,
  },
  {
    slug: "ubicacion-eficiente-fach-gran-avenida",
    titulo: "Ubicación eficiente: FACh y Gran Avenida",
    categoria: "Ubicación/Barrio",
    extracto: "Por qué la ubicación de San Patricio es estratégica para vivir e invertir.",
    cover: "/santiago-chile-neighborhood-aerial-view.jpg",
    fecha: "2024-12-28",
    contenido: `
      <h2>Conectividad</h2>
      <p>San Patricio está a pasos de:</p>
      <ul>
        <li>FACh: 5 minutos caminando</li>
        <li>Metro San Alberto Hurtado: 10 minutos</li>
        <li>Gran Avenida: acceso directo</li>
      </ul>
      
      <h2>Servicios cercanos</h2>
      <ul>
        <li>Supermercados y farmacias</li>
        <li>Colegios y jardines infantiles</li>
        <li>Centros de salud</li>
        <li>Comercio local</li>
      </ul>
    `,
  },
  {
    slug: "proceso-reserva-promesa",
    titulo: "Proceso de reserva y promesa",
    categoria: "Proceso",
    extracto: "Los pasos claros desde que reservas hasta que recibes las llaves.",
    cover: "/handshake-agreement-contract.jpg",
    fecha: "2024-12-20",
    contenido: `
      <h2>Paso 1: Reserva</h2>
      <p>Reserva con $500.000 por 90 días. Este monto representa el 50% del pie inicial.</p>
      
      <h2>Paso 2: Promesa de compraventa</h2>
      <p>Firma de promesa por correo electrónico. Documentos claros y proceso transparente.</p>
      
      <h2>Paso 3: Entrega</h2>
      <p>Etapa 1 se entrega en enero 2026. Recibes checklist de estándares de entrega.</p>
      
      <h2>Documentos necesarios</h2>
      <ul>
        <li>Cédula de identidad</li>
        <li>Comprobante de ingresos</li>
        <li>Datos de contacto</li>
      </ul>
    `,
  },
  {
    slug: "estandares-entrega-checklist",
    titulo: "Estándares de entrega: checklist",
    categoria: "Producto",
    extracto: "Qué verificamos antes de entregarte tu unidad. Proceso riguroso y documentado.",
    cover: "/quality-control-checklist-inspection.jpg",
    fecha: "2024-12-15",
    contenido: `
      <h2>Nuestro proceso de QA</h2>
      <p>Cada unidad pasa por múltiples revisiones antes de la entrega:</p>
      
      <h3>Inspección estructural</h3>
      <ul>
        <li>Muros, pisos y cielos</li>
        <li>Ventanas y puertas</li>
        <li>Impermeabilizaciones</li>
      </ul>
      
      <h3>Instalaciones</h3>
      <ul>
        <li>Sistema eléctrico completo</li>
        <li>Grifería y sanitarios</li>
        <li>Terminaciones</li>
      </ul>
      
      <h3>Documentación</h3>
      <ul>
        <li>Planos as-built</li>
        <li>Certificados de instalaciones</li>
        <li>Garantías</li>
      </ul>
    `,
  },
]