from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.core.urlresolvers import reverse_lazy
from models import Planet


class PlanetList(ListView):
    model = Planet


class PlanetCreate(CreateView):
    model = Planet
    fields = ['name', 'mass', 'distance_from_sun']
    success_url = reverse_lazy('list')


class PlanetDelete(DeleteView):
    model = Planet
    success_url = reverse_lazy('list')


class PlanetUpdate(UpdateView):
    model = Planet
    fields = ['name', 'mass', 'distance_from_sun']
    success_url = reverse_lazy('list')
