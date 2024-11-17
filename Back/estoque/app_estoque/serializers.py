from rest_framework import serializers
from .models import Produto

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'

#O serializer converte os dados de objetos Python para o
# formato JSON que o frontend pode entender e consumir.