from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render, redirect
from .models import Cliente
from .serializer import ClienteSerializer

# Create your views here.
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['cliente_id', 'edad', 'genero', 'saldo', 'activo', 'nivel_de_satisfaccion']

def index(request):
    return render(request, 'index.html')

def cliente_list(request):
    clientes = Cliente.objects.all()
    return render(request, 'read.html', {'clientes': clientes})

def cliente_create(request):
    clientes = Cliente.objects.all()

    if request.method == 'POST':
        try:
            # Obtener los datos del formulario
            edad = request.POST.get('edad')
            genero = request.POST.get('genero')
            saldo = request.POST.get('saldo')
            activo = request.POST.get('activo')
            nivel_de_satisfaccion = request.POST.get('nivel_de_satisfaccion')

            # Crear el cliente
            cliente = Cliente.objects.create(
                edad=edad,
                genero=genero,
                saldo=saldo,
                activo=activo,
                nivel_de_satisfaccion=nivel_de_satisfaccion
            )

            # Redireccionar al formulario de creación
            return redirect('read.html')
        
        # Si no se pudo crear el cliente, redirigir al formulario de creación
        except Exception as e:
            print(e)
            return redirect('create.html')

    return render(request, 'create.html', {'clientes': clientes})

def editar_cliente(request, pk):
    cliente = Cliente.objects.get(pk=pk)

    # si el metodo es POST, entonces es un formulario de actualización
    if request.method == 'POST':
        try:
            # Obtener los datos del formulario
            edad = request.POST.get('edad')
            genero = request.POST.get('genero')
            saldo = request.POST.get('saldo')
            activo = request.POST.get('activo')
            nivel_de_satisfaccion = request.POST.get('nivel_de_satisfaccion')

            # Actualizar el cliente
            cliente.edad = edad
            cliente.genero = genero
            cliente.saldo = saldo
            cliente.activo = activo
            cliente.nivel_de_satisfaccion = nivel_de_satisfaccion
            cliente.save()

            # Redireccionar al listado
            return redirect('read.html')
        except Exception as e:
            print(e)
            return redirect('update.html')
    
    return render(request, 'update.html', {'cliente': cliente})

def eliminar_cliente(request, pk):
    cliente = Cliente.objects.get(pk=pk)

    # Si el metodo es POST, entonces es un formulario de eliminación
    if request.method == 'POST':
        try:
            # Eliminar el cliente
            cliente.delete()

            # Redireccionar al formulario de eliminación
            return redirect('read')
        except Exception as e:
            print(e)
            return redirect('delete.html')
    
    return render(request, 'delete.html', {'cliente': cliente})