from django.db import models

class Message(models.Model):
    sender = models.CharField(max_length=100)  # or link to a User model if you have one
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.content[:30]}..."


# Create your models here.
