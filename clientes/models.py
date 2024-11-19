from django.db import models

# Create your models here.

# Modelo para Clientes
class Cliente(models.Model):
    GENEROS =[
        ('Masculino', 'Masculino'),
        ('Femenino', 'Femenino'),
        ('Desconocido', 'Desconocido'),
    ]

    ACTIVO = [
        ('Si', 'Si'),
        ('No', 'No'),
    ]

    NIVEL = [
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),
    ]

    cliente_id = models.IntegerField(primary_key=True)
    edad = models.IntegerField()
    genero = models.CharField(max_length=15, choices=GENEROS)
    saldo = models.IntegerField()
    activo = models.CharField(max_length=2, choices=ACTIVO)
    nivel_de_satisfaccion = models.CharField(max_length=2, choices=NIVEL)

    def __str__(self):
        return f"cliente numero : {self.cliente_id}"

