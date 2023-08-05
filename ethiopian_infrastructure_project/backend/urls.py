from django.urls import path
from . import views
from django.conf.urls import include
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
  path('categories/', views.CategoryList.as_view(), name=views.CategoryList.name),
  path('categories/<int:pk>/', views.CategoryDetail.as_view(), name=views.CategoryDetail.name),
  path('placescat1/', views.PlaceListCat1.as_view(), name=views.PlaceListCat1.name),
  path('placescat2/', views.PlaceListCat2.as_view(), name=views.PlaceListCat2.name),
  path('placescat3/', views.PlaceListCat3.as_view(), name=views.PlaceListCat3.name),
  path('placescat4/', views.PlaceListCat4.as_view(), name=views.PlaceListCat4.name),
  path('places/<int:pk>/', views.PlaceDetail.as_view(), name=views.PlaceDetail.name),
  path('api-auth/', include('rest_framework.urls'))
]

urlpatterns = format_suffix_patterns(urlpatterns)