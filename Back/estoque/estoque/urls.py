from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app_estoque.views import ProdutoViewSet
from django.http import HttpResponse

# View simples para a raiz
def home(request):
    return HttpResponse("Bem-vindo ao back do Estoque!")

router = DefaultRouter()
router.register(r'produtos', ProdutoViewSet)

urlpatterns = [
    path('', home),  # efinindo que o caminho
    #'/' chama a view 'home'
    path('api/', include(router.urls)),  # A rota '/api/' 
    #com a API de produtos
]
