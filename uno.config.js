import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),          // utility classes (Tailwind-like)
    presetAttributify(),  // enables <div text="xl gray-700">
    presetIcons(),        // adds support for icons
  ],
})
