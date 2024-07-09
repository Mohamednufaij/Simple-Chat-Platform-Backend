# Simple-Chat-App
How the Project Works
Django Setup:

-The ChatConsumer in consumers.py manages WebSocket connections.
-When a client connects to a WebSocket, it joins a room group.
-Messages sent by clients are broadcast to the room group.
React Frontend:

-The Chat component connects to the WebSocket server when it mounts.
-Messages are sent to the WebSocket server and received from it in real time.
-The messages are displayed in the chat window.
-Running the Project


Backend:

-Install dependencies: pip install -r requirements.txt
-Run the Django server: python manage.py runserver
-Run Daphne: daphne -p 8000 chat_project.asgi:application


Frontend:

-Install dependencies: npm install
-Start the React development server: npm start

Summary
-This project demonstrates a simple real-time chat application with Django Channels handling WebSocket connections on the backend and React for the frontend.
-The application allows multiple users to join a chat room and send messages in real time.
-By following the structure and setup above, you can develop a functional chat application and expand upon it with additional features and styling as needed.
