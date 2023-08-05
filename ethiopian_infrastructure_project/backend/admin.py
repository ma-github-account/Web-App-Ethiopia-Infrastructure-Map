from django.contrib.gis import admin
from .models import Category, Place

# Register your models here.
admin.site.register(Category)

class CustomGeoAdmin(admin.GISModelAdmin):
  gis_widget_kwargs = {
    'attrs': {
      'default_zoom' : 5.5,
      'default_lon': 39.45,
      'default_lat': 9.15
    }
  }

@admin.register(Place)
class PlaceAdmin(CustomGeoAdmin):
  pass
