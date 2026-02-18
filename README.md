# Proyecto React listo para internet

App creada con React + Vite y preparada para despliegue estatico.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

El resultado queda en la carpeta `dist/`.

## Subir a Vercel

1. Sube este proyecto a GitHub.
2. Entra a Vercel y crea un proyecto importando ese repositorio.
3. Vercel detecta Vite automaticamente.
4. Configuracion recomendada:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Pulsa Deploy.

Cada push nuevo a GitHub se despliega automaticamente.
