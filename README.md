This application displays Ethiopian infrastructure map. Locations visible on map are divided into four categories: Industrial Parks, Dams, Bridges, Airports. Locations are added in admin panel. After adding they are displayed on the map of Ethiopia with the icon based on the category. Clicking the location icon results in picture and description display.

Map functionalities:

- Zoom
- Search location on map
- Changing map type
- Clustering (Icons are grouped into group icon when zooming out)
- Print map to Pdf

Prerequisites:

- Python 3.9.7,
- Django 4.1.2,
- Django Rest Framework 3.14.0
- Pillow 7.0.0 (pip install Pillow==7.0.0)
- GeoDjango (PostGIS, PostgreSQL, Psycopg2, OSGeo4W, Gdal)

After installing PostreSQL and creating geospatial database, it needs to be referenced in settings.py file (line 109).
After creating geospatial database, the categories in Admin panel need to be created in following order: 1.Industrial Park 2.Dam 3.Bridge 4.Airport That way the proper icons are assigned to particular categories.

Application is based on Australian Cultural Heritage Places application presented by Ikrom Nishanbaev in his Udemy Course "Leaflet From Scratch With A GeoDjango Project".

How to run: 1.python manage.py makemigrations 2.python manage.py migrate 3.Adding desired locations in Admin panel 4.python manage.py runserver






![1](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/691c2dae-3a22-4c70-b7e3-0bb734ccefb7)





![2](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/3c0d7f75-32ce-4cdc-ab33-af64a9af7e16)





![3](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/611b5424-fd60-4906-84d7-e3c77a468a92)






![4](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/b0f8d3e8-e77b-4837-8cbc-2a4261922870)







![5](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/04288811-c710-41e3-897d-4fcc229f5f86)








![6](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/307ee59b-eec1-4103-b110-6ea9dd0a130e)








![7](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/66fafbc0-e945-4d3d-8978-c0a10148a52c)






![8](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/c873c4f8-7291-4f9b-bcd2-55deb994e256)






![9](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/edb69241-9696-4276-a159-57a4b4554d55)






![10](https://github.com/ma-github-account/Web-App-Ethiopia-Infrastructure-Map/assets/89083426/8b6d24c0-f2df-4651-8c61-f198c8ad4b98)


