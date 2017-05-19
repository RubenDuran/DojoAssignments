from django.conf.urls import url d
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$', views.show)
]
