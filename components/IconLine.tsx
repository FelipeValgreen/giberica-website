interface IconLineProps {
  icon: React.ReactNode
  className?: string
}

export function IconLine({ icon, className = "" }: IconLineProps) {
  return (
    <div className={`w-14 h-14 rounded-full bg-olivaTierra/10 flex items-center justify-center ${className}`}>
      <div className="text-olivaTierra">
        {icon}
      </div>
    </div>
  )
}

