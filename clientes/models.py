from django.db import models

# Create your models here.

# Modelo para Clientes
class Cliente(models.Model):
    GENEROS =[
        ('Masculino', 'Masculino'),
        ('Femenino', 'Femenino'),
        ('No Definido', 'No Definido'),
    ]

    cliente_id = models.IntegerField(primary_key=True)
    edad = models.IntegerField()
    genero =