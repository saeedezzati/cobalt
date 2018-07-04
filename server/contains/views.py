from django.http import JsonResponse
from bs4 import BeautifulSoup
from urllib.request import urlopen, Request
import certifi

# This restores the same behavior as before.
def index(request):
    endpoint = 'https://'+request.GET.get('endpoint')
    tag = request.GET.get('tag')
    text = request.GET.get('text')

    req = Request(endpoint, headers={'User-Agent': 'Mozilla/5.0'})

    page = urlopen(req, cafile=certifi.where()).read()
    soup = BeautifulSoup(page, 'lxml')
    soup.prettify()
    results = False
    for anchor in soup.findAll(tag):
        if(text.lower() in anchor.text.lower()):
            results = True
    return JsonResponse({'exist':results})