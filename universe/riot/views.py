from django.views.generic.base import TemplateView


class Planets(TemplateView):
    template_name = 'riot/planets.html'
