"use client"

import { Component, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-crema/20">
          <div className="text-center p-8 max-w-md mx-auto">
            <AlertTriangle className="h-16 w-16 text-olivaTierra mx-auto mb-4" />
            <h2 className="text-2xl font-display text-carbon mb-4">
              Algo salió mal
            </h2>
            <p className="text-carbon/70 mb-6">
              Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta recargar la página.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-carbon text-crema hover:opacity-90"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Recargar página
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
