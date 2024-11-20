# Evaluacion 3 | Limpieza de datos con pandas
---
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
pip install django djangorestframework django-filter
```
### Paso 4
ejecutamos el proyecto con este comando para el server de django
```
python manage.py runserver
```
### Paso 5
En el output de la consola nos debe salir un link en donde se ejecuta el servidor local, le damos click y ya estamos en el sistema :3
