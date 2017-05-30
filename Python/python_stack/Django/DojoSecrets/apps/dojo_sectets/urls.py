from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^secrets$', views.secrets),
    url(r'^top_secrets$', views.top_secrets),
    url(r'^add_secret$', views.add_secret),
    url(r'^secrets/(?P<id>\d+)/like$', views.like),
    url(r'^secrets/(?P<id>\d+)/delete$', views.delete),
]
