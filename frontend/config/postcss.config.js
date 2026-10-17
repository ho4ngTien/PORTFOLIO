import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default {
  plugins: [tailwindcss({ config: './config/tailwind.config.js' }), autoprefixer()],
}