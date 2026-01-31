'use client'

import { useState } from 'react'
import { Button, Input, Checkbox } from '../ui'
import { Card } from '../ui/Card'
import { Heart, CreditCard, Building, Smartphone } from 'lucide-react'

type DonationType = 'unica' | 'mensual'
type PaymentMethod = 'transferencia' | 'nequi' | 'tarjeta'

const donationAmounts = [
  { value: 20000, label: '$20.000' },
  { value: 50000, label: '$50.000' },
  { value: 100000, label: '$100.000' },
  { value: 200000, label: '$200.000' },
]

const bankInfo = {
  banco: 'Bancolombia',
  tipoCuenta: 'Cuenta de Ahorros',
  numeroCuenta: '123-456789-00',
  titular: 'Diócesis de Armenia - Pastoral de la Salud',
  nit: '890.000.123-4',
}

export function DonationForm() {
  const [donationType, setDonationType] = useState<DonationType>('unica')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [habeasData, setHabeasData] = useState(false)

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

  return (
    <div className="space-y-8">
      {/* Donation Type Selection */}
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
          Tipo de donación
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setDonationType('unica')}
            className={`
              p-4 rounded-xl border-2 text-center transition-all
              ${donationType === 'unica'
                ? 'border-celestial-500 bg-celestial-50'
                : 'border-slate-200 hover:border-slate-300'
              }
            `}
          >
            <span className="block text-2xl mb-1">🎁</span>
            <span className="font-medium text-slate-900">Única vez</span>
          </button>
          <button
            type="button"
            onClick={() => setDonationType('mensual')}
            className={`
              p-4 rounded-xl border-2 text-center transition-all
              ${donationType === 'mensual'
                ? 'border-celestial-500 bg-celestial-50'
                : 'border-slate-200 hover:border-slate-300'
              }
            `}
          >
            <span className="block text-2xl mb-1">🔄</span>
            <span className="font-medium text-slate-900">Mensual</span>
          </button>
        </div>
      </div>

      {/* Amount Selection */}
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
          Seleccione el monto
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {donationAmounts.map((amount) => (
            <button
              key={amount.value}
              type="button"
              onClick={() => {
                setSelectedAmount(amount.value)
                setCustomAmount('')
              }}
              className={`
                py-3 px-4 rounded-lg border-2 font-semibold transition-all
                ${selectedAmount === amount.value && !customAmount
                  ? 'border-celestial-500 bg-celestial-50 text-celestial-700'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }
              `}
            >
              {amount.label}
            </button>
          ))}
        </div>
        <Input
          label="O ingrese otro monto"
          name="customAmount"
          type="number"
          min="10000"
          placeholder="Ej: 75000"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value)
            setSelectedAmount(null)
          }}
          helperText="Monto mínimo: $10.000 COP"
        />
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
          Método de pago
        </h3>
        <div className="space-y-3">
          {/* Bank Transfer */}
          <button
            type="button"
            onClick={() => setPaymentMethod('transferencia')}
            className={`
              w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4
              ${paymentMethod === 'transferencia'
                ? 'border-celestial-500 bg-celestial-50'
                : 'border-slate-200 hover:border-slate-300'
              }
            `}
          >
            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
              <Building className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <span className="block font-medium text-slate-900">Transferencia bancaria</span>
              <span className="text-sm text-slate-500">PSE o transferencia directa</span>
            </div>
          </button>

          {/* Nequi */}
          <button
            type="button"
            onClick={() => setPaymentMethod('nequi')}
            className={`
              w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4
              ${paymentMethod === 'nequi'
                ? 'border-celestial-500 bg-celestial-50'
                : 'border-slate-200 hover:border-slate-300'
              }
            `}
          >
            <div className="w-12 h-12 rounded-lg bg-fuchsia-100 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-fuchsia-600" />
            </div>
            <div>
              <span className="block font-medium text-slate-900">Nequi</span>
              <span className="text-sm text-slate-500">Pago con billetera digital</span>
            </div>
          </button>

          {/* Card (Wompi - future) */}
          <button
            type="button"
            onClick={() => setPaymentMethod('tarjeta')}
            className={`
              w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4
              ${paymentMethod === 'tarjeta'
                ? 'border-celestial-500 bg-celestial-50'
                : 'border-slate-200 hover:border-slate-300'
              }
            `}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <span className="block font-medium text-slate-900">Tarjeta de crédito/débito</span>
              <span className="text-sm text-slate-500">Visa, Mastercard, American Express</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bank Transfer Info */}
      {paymentMethod === 'transferencia' && (
        <Card variant="outlined" className="bg-slate-50">
          <h4 className="font-semibold text-slate-900 mb-4">Datos para transferencia</h4>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Banco:</dt>
              <dd className="font-medium text-slate-900">{bankInfo.banco}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Tipo de cuenta:</dt>
              <dd className="font-medium text-slate-900">{bankInfo.tipoCuenta}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Número de cuenta:</dt>
              <dd className="font-medium text-slate-900 font-mono">{bankInfo.numeroCuenta}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Titular:</dt>
              <dd className="font-medium text-slate-900 text-right">{bankInfo.titular}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">NIT:</dt>
              <dd className="font-medium text-slate-900 font-mono">{bankInfo.nit}</dd>
            </div>
          </dl>
          <p className="text-xs text-slate-500 mt-4">
            Después de realizar la transferencia, envíenos el comprobante a{' '}
            <a href="mailto:donaciones@diocesisarmenia.org" className="text-celestial-600 hover:underline">
              donaciones@diocesisarmenia.org
            </a>
          </p>
        </Card>
      )}

      {/* Nequi Info */}
      {paymentMethod === 'nequi' && (
        <Card variant="outlined" className="bg-fuchsia-50 border-fuchsia-200">
          <h4 className="font-semibold text-slate-900 mb-4">Datos para Nequi</h4>
          <p className="text-lg font-mono font-semibold text-fuchsia-700 mb-2">
            300 123 4567
          </p>
          <p className="text-sm text-slate-600">
            A nombre de: Diócesis de Armenia - Pastoral de la Salud
          </p>
          <p className="text-xs text-slate-500 mt-4">
            Envíenos el comprobante a{' '}
            <a href="mailto:donaciones@diocesisarmenia.org" className="text-celestial-600 hover:underline">
              donaciones@diocesisarmenia.org
            </a>
          </p>
        </Card>
      )}

      {/* Card Payment (Wompi integration placeholder) */}
      {paymentMethod === 'tarjeta' && (
        <Card variant="outlined" className="bg-blue-50 border-blue-200">
          <h4 className="font-semibold text-slate-900 mb-4">Pago con tarjeta</h4>
          <p className="text-sm text-slate-600">
            El sistema de pagos en línea estará disponible próximamente.
            Por ahora, puede realizar su donación por transferencia bancaria o Nequi.
          </p>
        </Card>
      )}

      {/* Habeas Data */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <Checkbox
          name="habeasData"
          checked={habeasData}
          onChange={(e) => setHabeasData(e.target.checked)}
          label={
            <span className="text-sm text-slate-700">
              Autorizo el tratamiento de mis datos personales de acuerdo con la{' '}
              <a
                href="/politica-privacidad"
                target="_blank"
                className="text-celestial-600 hover:underline"
              >
                Política de Privacidad
              </a>
              .
            </span>
          }
        />
      </div>

      {/* Summary and CTA */}
      {finalAmount && finalAmount >= 10000 && (
        <div className="bg-gradient-to-br from-celestial-50 to-healing-50 p-6 rounded-xl border border-celestial-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600">
              Donación {donationType === 'mensual' ? 'mensual' : 'única'}:
            </span>
            <span className="text-2xl font-bold text-celestial-700">
              ${finalAmount.toLocaleString('es-CO')} COP
            </span>
          </div>
          <Button
            size="lg"
            className="w-full"
            disabled={!paymentMethod || !habeasData}
          >
            <Heart className="w-5 h-5" />
            Confirmar donación
          </Button>
          <p className="text-xs text-center text-slate-500 mt-3">
            Su donación es 100% segura y ayuda a miles de personas
          </p>
        </div>
      )}
    </div>
  )
}

export default DonationForm
