FROM python:2.7.17-alpine3.11

WORKDIR /website

RUN pip install django-crispy-forms==1.7.2
RUN pip install django==1.11


COPY . . 

CMD [ "python","manage.py","runserver","0.0.0.0:8000" ]