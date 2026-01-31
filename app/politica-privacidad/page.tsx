import { Metadata } from 'next'
import { PageLayout } from '@/components/layout'
import { Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos',
  description: 'Política de tratamiento de datos personales de la Pastoral de la Salud, Diócesis de Armenia, en cumplimiento de la Ley 1581 de 2012.',
}

export default function PoliticaPrivacidadPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-gradient-to-br from-celestial-600 to-celestial-700 py-16">
        <div className="container-pastoral">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-celestial-100 text-lg max-w-2xl">
            En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container-pastoral">
          <Card className="max-w-4xl mx-auto prose prose-slate">
            <div className="space-y-8">
              {/* Responsable */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  1. Responsable del Tratamiento
                </h2>
                <p className="text-slate-600">
                  <strong>Pastoral de la Salud — Diócesis de Armenia</strong><br />
                  Dirección: Carrera 13 No. 20-25, Armenia, Quindío, Colombia<br />
                  Teléfono: +57 606 741 2233<br />
                  Correo electrónico: pastoral.salud@diocesisarmenia.org
                </p>
              </div>

              {/* Finalidad */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  2. Finalidad del Tratamiento
                </h2>
                <p className="text-slate-600 mb-4">
                  Los datos personales recolectados serán utilizados para las siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Responder solicitudes de información sobre nuestros servicios</li>
                  <li>Coordinar visitas pastorales a enfermos y sus familias</li>
                  <li>Gestionar inscripciones a cursos y programas de formación</li>
                  <li>Vincular voluntarios a los diferentes ministerios de la Pastoral</li>
                  <li>Enviar comunicaciones relacionadas con nuestras actividades</li>
                  <li>Procesar donaciones y emitir certificados correspondientes</li>
                  <li>Cumplir con obligaciones legales y contractuales</li>
                </ul>
              </div>

              {/* Datos recolectados */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  3. Datos Personales Recolectados
                </h2>
                <p className="text-slate-600 mb-4">
                  Según el tipo de interacción, podemos recolectar:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li><strong>Datos de identificación:</strong> Nombre completo, cédula de ciudadanía</li>
                  <li><strong>Datos de contacto:</strong> Teléfono, correo electrónico, dirección</li>
                  <li><strong>Datos demográficos:</strong> Edad, ocupación, parroquia</li>
                  <li><strong>Datos de salud:</strong> Información sobre condición de salud del enfermo (cuando sea pertinente para la atención pastoral)</li>
                </ul>
              </div>

              {/* Derechos */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  4. Derechos del Titular
                </h2>
                <p className="text-slate-600 mb-4">
                  De acuerdo con la Ley 1581 de 2012, usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li><strong>Conocer:</strong> Acceder a sus datos personales en cualquier momento</li>
                  <li><strong>Actualizar:</strong> Modificar datos inexactos, incompletos o desactualizados</li>
                  <li><strong>Rectificar:</strong> Corregir información errónea</li>
                  <li><strong>Suprimir:</strong> Solicitar la eliminación de sus datos cuando no exista obligación legal de conservarlos</li>
                  <li><strong>Revocar:</strong> Retirar la autorización otorgada para el tratamiento</li>
                  <li><strong>Presentar quejas:</strong> Ante la Superintendencia de Industria y Comercio</li>
                </ul>
              </div>

              {/* Seguridad */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  5. Medidas de Seguridad
                </h2>
                <p className="text-slate-600">
                  Implementamos medidas técnicas, humanas y administrativas para proteger sus datos
                  personales contra acceso no autorizado, pérdida, alteración o destrucción.
                  Solo el personal autorizado tiene acceso a la información, bajo estrictos
                  protocolos de confidencialidad.
                </p>
              </div>

              {/* Transferencia */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  6. Transferencia de Datos
                </h2>
                <p className="text-slate-600">
                  Sus datos personales no serán transferidos a terceros sin su autorización
                  previa, salvo cuando exista obligación legal o requerimiento de autoridad
                  competente. Cuando sea necesario compartir información con la Diócesis de
                  Armenia u otras entidades eclesiásticas, se garantizará la confidencialidad.
                </p>
              </div>

              {/* Vigencia */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  7. Vigencia
                </h2>
                <p className="text-slate-600">
                  Los datos personales serán conservados durante el tiempo necesario para
                  cumplir las finalidades descritas, o mientras exista una relación pastoral
                  con el titular. Posteriormente, serán eliminados de forma segura, salvo
                  obligación legal de conservación.
                </p>
              </div>

              {/* Contacto */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  8. Contacto para Ejercer sus Derechos
                </h2>
                <p className="text-slate-600 mb-4">
                  Para ejercer sus derechos como titular de datos personales, puede comunicarse con nosotros:
                </p>
                <div className="bg-slate-100 rounded-lg p-6 text-slate-600">
                  <p><strong>Pastoral de la Salud — Diócesis de Armenia</strong></p>
                  <p>Correo: pastoral.salud@diocesisarmenia.org</p>
                  <p>Teléfono: +57 606 741 2233</p>
                  <p>Horario: Lunes a Viernes, 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Actualizaciones */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  9. Actualizaciones de esta Política
                </h2>
                <p className="text-slate-600">
                  Esta política puede ser actualizada periódicamente. Cualquier cambio será
                  publicado en esta página con la fecha de la última actualización.
                </p>
                <p className="text-sm text-slate-500 mt-4">
                  <strong>Última actualización:</strong> Enero 2026
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}
