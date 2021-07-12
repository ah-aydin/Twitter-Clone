from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'accounts': reverse('account-list', request=request, format=format),
        'tweets': reverse('tweet-list', request=request, format=format),
    })