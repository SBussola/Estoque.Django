from django.db import models

from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)
    quantidade_estoque = models.IntegerField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    data_adicao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome

