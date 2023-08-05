from .models import Category, Place
from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer


class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'

class PlaceSerializer(GeoFeatureModelSerializer):
  categories = serializers.SlugRelatedField(queryset=Category.objects.all(), slug_field='category_name')

  class Meta:
    model = Place
    geo_field = 'point_geom'

    fields = (
      'pk',
      'categories',
      'place_name',
      'site',
      'coordinates',
      'info', 
      'created_at', 
      'modified_at',
      'image',
    )
