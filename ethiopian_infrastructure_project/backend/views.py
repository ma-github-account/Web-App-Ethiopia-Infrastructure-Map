from .models import Place, Category
from .serializers import CategorySerializer, PlaceSerializer
from rest_framework import generics

from django.http import Http404
from django.contrib.gis.db.models.functions import Distance
from django.shortcuts import get_object_or_404


# Create your views here.
class CategoryList(generics.ListAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  name = 'category-list'

class CategoryDetail(generics.RetrieveAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  name = 'category-detail'


class PlaceListCat1(generics.ListAPIView):
  queryset = Place.objects.filter(active=True,categories=1)
  serializer_class = PlaceSerializer
  name = 'places-list'

class PlaceListCat2(generics.ListAPIView):
  queryset = Place.objects.filter(active=True,categories=2)
  serializer_class = PlaceSerializer
  name = 'places-list'
  
class PlaceListCat3(generics.ListAPIView):
  queryset = Place.objects.filter(active=True,categories=3)
  serializer_class = PlaceSerializer
  name = 'places-list'

class PlaceListCat4(generics.ListAPIView):
  queryset = Place.objects.filter(active=True,categories=4)
  serializer_class = PlaceSerializer
  name = 'places-list'

class PlaceDetail(generics.RetrieveAPIView):
  queryset = Place.objects.filter(active=True)
  serializer_class = PlaceSerializer
  name = 'places-detail'

    