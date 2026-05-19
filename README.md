# practice-4-prograIV

## Ejecutar

```bash
npm start
```

O, si prefieres correrlo directo:

```bash
node index.js
```

## GitHub Actions

GitHub Actions es la herramienta de automatización de GitHub para ejecutar tareas cuando pasa algo en el repositorio, por ejemplo un push, un pull request o una ejecución manual. Es la base de un pipeline de CI/CD: primero valida el código y luego puede construir, probar y desplegar la aplicación de forma automática.

En palabras simples, reemplaza los deploys manuales porque evita que una persona tenga que subir cambios paso por paso. El proceso queda escrito en archivos del repositorio, se ejecuta siempre igual, deja registro de cada paso y reduce errores humanos.

## Estructura

- `index.js`: servidor HTTP mínimo que responde `Hola mundo` en `/`
- `package.json`: comando de inicio de la aplicación
- `.github/workflows/`: carpeta reservada para futuros workflows de GitHub Actions