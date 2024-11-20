# Evaluacion 3 | Limpieza de datos con pandas
Para poder correr el projecto de django , los pasos son los siguientes:
### Paso 1
Se debe descargar el projecto desde el repositorio y descomprimir en cualquier carpeta o si se usa apache en windows, guardarlo en:
```
Carpeta htdocs en C:/Apache u otro administrador de apache como C:/xampp o C:/wamp64
```
### Paso 2
Abrir una terminal en la carpeta del projecto y creamos un entorno virtual para el proyecto con este comando:
```
# En windows
python -m venv env
./env/scripts/activate

# En linux
python 3 -m venv env
source 
```
### Paso 3
Instalamos los siguientes paquetes con PIP ejecutando el siguiente comando
```
pip install django djangorestframework django-filter django-cors-headers
```
PS: Si estas en windows y usas apache, debes instalar los paquetes tanto en tu sistema con en el entorno virtual para evitar errores
### Paso 4
ejecutamos el proyecto con este comando para el server de django
```
python manage.py runserver
```
### Paso 5
En el output de la consola nos debe salir un link en donde se ejecuta el servidor local, le damos click y ya estamos en el sistema :3
```
# Output de la consola
  System check identified no issues (0 silenced).
  November 20, 2024 - 11:49:15
  Django version 5.1.2, using settings 'eva3.settings'
  Starting development server at http://127.0.0.1:8000/ # Este es el link
  Quit the server with CTRL-BREAK.
```

# Uso de react
Este proyecto tambien incluye una plantilla react para consumir un endpoint, la cual se encuentra en la carpeta `react_frontend`.
Para poder ejecutar el react debemos hacer los siguientes pasos
### Paso 1
Abrimos una terminal en la carpeta `react-frontend` y ejecutamos el siguiente comando:
```
npm run dev
```
Lo cual nos devuelve el siguiente log:
```
  VITE v5.4.11  ready in 428 ms

  ➜  Local:   http://localhost:5173/ #Link para acceder a la vista de react
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
y con esto ya tenemos todo configurado :D
## Manejo de errores
Un error el cual podemos tener es que la vista react nos devuelva el siguiente error:
```
  Error: NetworkError when attempting to fetch resource.
```
Para este caso, tenemos que cambiar el archivo `ClienteDashboard.jsx` que se encuentra en `react_frontend/src/components`
cambiando la linea 3 la cual se ve asi:
```
  const API_URL = 'http://localhost';
```
En donde debemos cambiar el `http://localhost` por la url en donde se este ejecutando el proyecto, para este ejemplo usaremos el link que nos dio la linea de comando de arriba
```
# Output de la consola
  System check identified no issues (0 silenced).
  November 20, 2024 - 11:49:15
  Django version 5.1.2, using settings 'eva3.settings'
  Starting development server at http://127.0.0.1:8000/ # Este es el link
  Quit the server with CTRL-BREAK.
```
Asi debe quedar `API_URL`:
```
  const API_URL = 'http://127.0.0.1:8000/';
```

