import Image from "next/image"

interface ImagePlaceholderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export function ImagePlaceholder({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = "",
  priority = false,
  fill = false
}: ImagePlaceholderProps) {
  // Si la imagen no existe, mostrar un placeholder con gradiente
  const placeholderStyle = {
    background: 'linear-gradient(135deg, #0E3B2E 0%, #B66A2C 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    borderRadius: '8px'
  }

  return (
    <div 
      style={placeholderStyle}
      className={`${className} ${fill ? 'absolute inset-0' : ''}`}
    >
      <div className="text-center p-4">
        <div className="text-2xl mb-2">🏗️</div>
        <div>{alt}</div>
        <div className="text-xs opacity-75 mt-1">Imagen placeholder</div>
      </div>
    </div>
  )
}
