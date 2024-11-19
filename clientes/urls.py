from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet
from . import views

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='index'),

    # urls para las vistas de clientes
    path('clientes/', views.cliente_list, name='read'),
    path('clientes/crear/', views.cliente_create, name='create'),
    path('clientes/<int:pk>/editar/', views.editar_cliente, name='update.html'),
    path('clientes/<int:pk>/eliminar/', views.eliminar_cliente, name='delete.html'),
]
