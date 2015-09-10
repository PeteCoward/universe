from django.conf.urls import url
import views

urlpatterns = [
    url(r'^$', views.PlanetList.as_view(), name='list'),
    url(r'^create/$', views.PlanetCreate.as_view(), name='create'),
    url(r'^delete/(?P<pk>\d+)/$', views.PlanetDelete.as_view(), name='delete'),
    url(r'^update/(?P<pk>\d+)/$', views.PlanetUpdate.as_view(), name='update'),
]
