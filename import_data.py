# Este archivo sirve para poder importar los datos de los clientes desde un archivo CSV
# a la base de datos de Django c:

import csv
import os
import django

# Configurar el entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'eva3.settings')
django.setup()

from clientes.models import Cliente

def import_clientes_from_csv(csv_file_path):
    with open(csv_file_path, encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            try:
                Cliente.objects.create(
                    cliente_id=int(row['Cliente_ID']),
                    edad=int(row['Edad']),
                    genero=row['Genero'],
                    saldo=int(row['Saldo']),
                    activo=row['Activo'],
                    nivel_de_satisfaccion=row['Nivel_de_Satisfaccion']
                )
                print(f"Cliente {row['Cliente_ID']} importado correctamente")
            except Exception as e:
                print(f"Error importando cliente {row['Cliente_ID']}: {str(e)}")

if __name__ == '__main__':
    # Cambia esta ruta por la ubicación de tu archivo CSV
    csv_file_path = r'datos_limpios.csv'
    import_clientes_from_csv(csv_file_path)