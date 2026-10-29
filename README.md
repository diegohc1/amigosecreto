# Amigo Secreto Familiar 🎁

Página estática en HTML, CSS y JavaScript, pensada para publicar gratis con GitHub Pages.

## Archivos

- `index.html`: contenido y secciones.
- `styles.css`: colores, diseño adaptable, ilustraciones CSS y animaciones.
- `script.js`: participantes, deseos, fecha, cuenta regresiva, frases aleatorias y descarga de evento para calendario.

## Personalizar el contenido

### 1. Participantes y deseos

Abre `script.js` y modifica el arreglo `PARTICIPANTS`. Cada persona tiene estos campos:

```js
{
  name: "Nombre",
  relation: "Descripción breve",
  emoji: "🎨",
  color: "#fbe6a8",
  description: "Qué le gusta a esta persona.",
  wishes: ["Idea de regalo 1", "Idea de regalo 2"],
  avoid: "Qué preferiría no recibir"
}
```

Duplica un bloque para añadir más personas o elimina los ejemplos que no necesites. Conserva las comas entre los bloques.

### 2. Fecha, hora y lugar

En `script.js`, edita `EVENT_DETAILS`:

- `dateTime`: fecha y hora en formato `AAAA-MM-DDTHH:MM:SS`, usando la hora local del lugar del evento.
- `dateLabel`: cómo quieres mostrar la fecha.
- `timeLabel`: texto de la hora.
- `location`: nombre del lugar.
- `address`: dirección o indicaciones.
- `durationHours`: duración estimada para el evento del calendario.

**Importante:** `dateTime` debe coincidir con `dateLabel` y `timeLabel`, pues controla la cuenta regresiva y el archivo de calendario.

### 3. Reglas

Edita los cuatro bloques de reglas en `index.html` (busca `rulesGrid`). Puedes cambiar títulos, emojis y texto, y copiar una tarjeta si quieres añadir otra regla.

### 4. Frases

En `script.js`, edita el arreglo `FUN_MESSAGES` para cambiar los mensajes que aparecen al pulsar “Dame otra frase”.

### 5. Colores y tipografía

En la parte superior de `styles.css` encontrarás las variables CSS en `:root`, por ejemplo `--green`, `--coral`, `--yellow` y `--cream`. Puedes cambiar esos valores para ajustar la paleta.

La página usa Google Fonts para las tipografías; si prefieres no depender de una conexión externa, elimina el `@import` y se usarán las fuentes de respaldo del sistema.

## Probar en tu computadora

1. Descarga y descomprime el ZIP.
2. Abre la carpeta y haz doble clic en `index.html`.
3. Para una prueba local sencilla basta con un navegador moderno. Si editas archivos, actualiza la pestaña para ver los cambios.

## Publicar en GitHub Pages

1. Inicia sesión en GitHub y crea un repositorio nuevo, por ejemplo `amigo-secreto-familiar`.
2. Sube `index.html`, `styles.css` y `script.js` a la raíz del repositorio (no subas solo el ZIP).
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/(root)`, y guarda.
6. Espera a que termine la publicación. GitHub mostrará la URL de tu página en esa misma sección.

Cada vez que edites los archivos y subas los cambios al repositorio, GitHub Pages actualizará el sitio.

## Privacidad

La página es pública si el repositorio y GitHub Pages están publicados de esa manera. No pongas información sensible ni datos privados. Si no quieres que personas ajenas a la familia vean las listas, considera usar apodos o publicar solo la información que todos acepten compartir.
