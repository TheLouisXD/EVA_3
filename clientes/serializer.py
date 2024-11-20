from rest_framework import serializers
from .models import Cliente

# Serializer para Clientes
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'