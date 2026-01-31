import Image from 'next/image'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface TeamMemberProps {
  name: string
  role: string
  roleType: 'obispo' | 'delegado' | 'coordinador' | 'asesor' | 'voluntario'
  image?: string
  bio?: string
}

const roleBadgeVariants: Record<string, 'primary' | 'success' | 'warning' | 'info' | 'default'> = {
  obispo: 'primary',
  delegado: 'success',
  coordinador: 'info',
  asesor: 'warning',
  voluntario: 'default',
}

const roleTitles: Record<string, string> = {
  obispo: 'Obispo',
  delegado: 'Delegado',
  coordinador: 'Coordinador',
  asesor: 'Asesor',
  voluntario: 'Voluntario',
}

export function TeamMember({
  name,
  role,
  roleType,
  image,
  bio,
}: TeamMemberProps) {
  return (
    <Card variant="default" padding="default" className="text-center">
      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-celestial-100 to-celestial-200 flex items-center justify-center">
            <span className="font-display text-2xl font-semibold text-celestial-600">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Role Badge */}
      <Badge variant={roleBadgeVariants[roleType]} size="sm" className="mb-2">
        {roleTitles[roleType]}
      </Badge>

      {/* Name */}
      <h3 className="font-display text-lg font-semibold text-slate-900 mb-1">
        {name}
      </h3>

      {/* Role Description */}
      <p className="text-sm text-celestial-600 font-medium mb-2">
        {role}
      </p>

      {/* Bio */}
      {bio && (
        <p className="text-sm text-slate-600 mt-3">
          {bio}
        </p>
      )}
    </Card>
  )
}

export default TeamMember
