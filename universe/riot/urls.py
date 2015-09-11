from django.conf.urls import url
import views

urlpatterns = [
    url(r'^$', views.Planets.as_view(), name='planets'),
]
