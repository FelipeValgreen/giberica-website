#!/bin/bash

echo "🚀 SUBIENDO GIBÉRICA A GITHUB"
echo "================================"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estás en el directorio correcto"
    echo "Ejecuta: cd /Users/valgreen/Downloads/giberica-clean"
    exit 1
fi

echo "✅ Directorio correcto detectado"

# Verificar que Git esté instalado
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git no está instalado"
    echo "Instala Git desde: https://git-scm.com/"
    exit 1
fi

echo "✅ Git detectado"

# Verificar que el repositorio esté inicializado
if [ ! -d ".git" ]; then
    echo "❌ Error: Repositorio Git no inicializado"
    exit 1
fi

echo "✅ Repositorio Git detectado"

# Verificar que hay commits
if ! git log --oneline -1 &> /dev/null; then
    echo "❌ Error: No hay commits en el repositorio"
    exit 1
fi

echo "✅ Commits detectados"

echo ""
echo "📋 INSTRUCCIONES PARA CONTINUAR:"
echo "================================"
echo ""
echo "1. Ve a https://github.com/new"
echo "2. Crea un repositorio llamado 'giberica-website'"
echo "3. Copia la URL del repositorio (algo como: https://github.com/TU-USUARIO/giberica-website.git)"
echo "4. Ejecuta estos comandos:"
echo ""
echo "   git remote add origin https://github.com/TU-USUARIO/giberica-website.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "🎯 ¡El código está listo para subir!"
echo ""
echo "📊 RESUMEN DEL PROYECTO:"
echo "- ✅ Paleta Olive Garden implementada"
echo "- ✅ Logo SVG exacto con líneas arquitectónicas"
echo "- ✅ Slogan 'Gestión e Inmobiliaria'"
echo "- ✅ SEO optimizado con schema.org"
echo "- ✅ Performance optimizado para Lighthouse 90+"
echo "- ✅ Accesibilidad AA compliant"
echo "- ✅ WhatsApp IA in-page widget"
echo "- ✅ Blog con 6 posts y UTM tracking"
echo "- ✅ San Patricio landing completa"
echo "- ✅ Sticky CTA persistente"
echo "- ✅ Página 404 con CTA de retorno"
echo "- ✅ Consentimiento en formularios"
echo ""
echo "🔗 URLs del sitio:"
echo "- Vercel: https://giberica-san-patricio-9d75itr3b-filipovalverde-5673s-projects.vercel.app"
echo "- GitHub: https://github.com/TU-USUARIO/giberica-website (después de subir)"
echo ""
echo "¡Todo listo para compartir con ChatGPT! 🚀"
