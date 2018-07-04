from django.http import JsonResponse
from bs4 import BeautifulSoup
from urllib.request import urlopen, Request
import certifi

# This restores the same behavior as before.
def index(request):
    endpoint = 'https://'+request.GET.get('endpoint')
    tag = request.GET.get('tag')

    req = Request(endpoint, headers={'User-Agent': 'Mozilla/5.0'})

    page = urlopen(req, cafile=certifi.where()).read()
    soup = BeautifulSoup(page, 'lxml')
    soup.prettify()
    results = []
    for anchor in soup.findAll(tag):
        results.append({'innerText': str(anchor.text), 'innerHtml': str(anchor.encode_contents())})
    return JsonResponse({'h1':results})