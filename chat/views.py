from django.shortcuts import render
from .models import Message
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@csrf_exempt  # Only use if you're not sending CSRF tokens
def save_message(request):
    if request.method == 'POST':
        sender = request.POST.get('sender')
        content = request.POST.get('content')

        # Ensure the necessary data is provided
        if not sender or not content:
            return JsonResponse({'status': 'error', 'message': 'Sender and content are required.'}, status=400)

        # Save the message
        Message.objects.create(sender=sender, content=content)
        return JsonResponse({'status': 'success'}, status=201)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)

def get_messages(request):
    messages = Message.objects.all().order_by('-timestamp')[:50]
    data = [{"sender": m.sender, "content": m.content, "timestamp": m.timestamp} for m in messages]
    return JsonResponse(data, safe=False)
