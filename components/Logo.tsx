import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showSlogan?: boolean
  className?: string
}

export function Logo({ size = "md", showSlogan = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  }

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  }

  const sloganSizes = {
    sm: "text-xs",
    md: "text-xs", 
    lg: "text-sm"
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={sizeClasses[size]}>
        <Image
          src="/brand/giberica-logo.svg"
          alt="Gibérica Logo"
          width={size === "sm" ? 32 : size === "md" ? 48 : 64}
          height={size === "sm" ? 32 : size === "md" ? 48 : 64}
          className="w-full h-full"
        />
      </div>
      <div>
        <span className={`font-display font-bold text-carbon ${textSizes[size]}`}>
          GIBÉRICA
        </span>
        {showSlogan && (
          <p className={`text-olivaTierra -mt-1 ${sloganSizes[size]}`}>
            Gestión e Inmobiliaria
          </p>
        )}
      </div>
    </div>
  )
}
