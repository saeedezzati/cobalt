

You can see the json output by just running the server side code and visiting the following urls.

Server:

    - cd server
    - pip install -r requirements.txt [You only need a few packages from this file not all of them. Running this on a virtualenv is a better idea. ]
    - python manage.py runserver
    - http://localhost:8000/parse/?endpoint=www.cobalt.io&tag=h1
    - http://localhost:8000/contains/?endpoint=www.cobalt.io&tag=h1&text=service

There is also a client side written in react. Visiting the following urls also make a call from the client to the server and show the result on the client side when the server respond.

Client:

    - cd client
    - npm install
    - npm start
    - Go to http://localhost:3000/parse?endpoint=www.cobalt.io&tag=h1
    - Go to http://localhost:3000/contains?endpoint=www.cobalt.io&tag=h1&text=service
