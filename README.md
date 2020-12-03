# 404

# GOGYM
# Entega 6
La aplicación se encuentra en el siguiente link: https://sleepy-brook-55941.herokuapp.com


# Usuarios

Administrador:
Email: admin@gogym.cl
Password: admin

Entrenador:
Email: entrenador@gogym.cl
Password: admin



Movimos la aplicación a la raíz de este repositorio, por lo que ahora la rama master está en heroku.

## CSS

Se mejoró el aspecto de la página, los botones, links y navbar. Incorporaron imágenes. También se crearon distintos 
perfiles para Administrador y Usuario. Se añadieron links a la navbar. Se incorporaron vistas en el home,
de los entrenadores, nutricionistas y membresía. Se mejoró el CSS de las máquinas y salas. 

## Home

Página principal donde se pueden visualizar las clases, máquinas, nutricionistas, salas, entrenadores. Se le agregaron fotografías que lleven a los links.
Hay dos botones uno para CREAR CUENTA y otro para iniciar sesión. 


## React:

1. Filtro: se terminó el filtro que permite buscar máquinas por categorías.
2. Chat: se pueden enviar mensajes sin que se recargue la página
3. Revisión de formularios: se la validacion  que valide email y password.

## Cliente:
Como cliente, en el dashboard podras ver las clases, máquinas, profesores, salas y entrenadores.Las rutas fueron restringidas  y los botones necesarios solamente se muestran para el cliente.
También puede chatear directamente y tener acceso a sus conversaciones. Tambien puede eliminarlas.

Además ahora puede agendar citas con especialistas en la vista Citas. Ahñi elige al especialista y reserva la hora.
Hay un espacio donde se pueden dejar comentarios sobre los especialistas.

### Reservar clase:
 Apredando la navbar clases, podrás ver todas las clases disponibles.  Y para reservar una clase tienes que hacer click en VER y luego en el botón inscribirme.
 ### Reservar máquina:
 Apredando la navbar máquinas, podrás ver todas las máquinas disponibles.  Y para reservar una máquina tienes que hacer click en RESERVAR.
 ### Chat:
 ### Perfil de salud:
  Cada cliente cuenta con un perfil de salud, que deberá ser visualizado en la navbar.También tiene un historial
  donde puede ver todas sus fichas de salud.
 
 ## Administrador:

El administrador puede, agregar o eliminar clases, gestionar a los usuarios.
Puede crear o eliminar citas con especialista. Se restringieron las rutas.
Además puede crear perfiles de salud para los clientes.



## Cloudinary

Funciona cloudinary, se pueden cargar fotos a la página.


# RUTAS 
## Usuarios
/users - ruta para visualizar todos los usuarios
/users/:id ruta para ver el perfil de cada usuario y sus chats con otros usuarios, hay un enlace para ver la conversación.

El delete y update está creado pero no fue posible subirlo a tiempo, al igual que la eliminación de conversaciones. No se consideró el caso de eliminar ni editar mensajes individuales ni edición de las conversaciones, ya que no tienen sentido (conversation hasMany messages)


## Conversaciones
/conversations/:id ruta para ver una conversación con todos sus mensajes. Desde esta misma ruta se puede enviar un nuevo mensaje (solo si es uno de los usuarios que pertenece a la conversación) 


## Salas:
/room - ruta para visualizar todas las salas
/room/:id - ruta para una sala en particular, se puede llegar directo desde la página principal haciendo click en “SALA” abajo de cada clase
/room/new - click en agregar- ruta para crear una nueva sala.


## Máquinas:
/machines - ruta para visualizar todas las máquinas
/machines/:id - click en Ver más - ruta para visualizar una máquina en particular
/machines/new -click en Agregar - ruta para crear una máquina nueva



## Membresías
/memberships - ruta para visualizar todas las membresías
/memberships/:id - click en Ver más - ruta para visualizar una membresía en particular
/memberships/new -click en Agregar - ruta para crear una membresía nueva

## Cita con especialista
/appointments

El administrador puede crear citas de cualquier especialista, por ahora necesita su id.
Un especialista solo puede crear citas propias (ya no necesita id)
Un especialista y el administrador pueden cambiar el estado de la cita (agendada, realizada, cancelada y no asiste) en la vista de la cita.
Un cliente puede agendar y desagendar horas dispoi¡nibles.

## Inscripciones a clases
Un cliente se puede inscribir a todas las clases que quiera y también se puede desinscribir. (en la ruta de cada clase /event/:id)

## Consideraciones:




# Entega 3
La aplicación se encuentra en el siguiente link: https://ancient-ocean-79502.herokuapp.com (desde la entrega 4 fue actualizado)


# Rutas:
## Página principal: https://ancient-ocean-79502.herokuapp.com
Se muestran las clases destacadas, con sus respectivos horarios y salas. Si haces click en sala te lleva a cada sala y se muestran las clases que se imparten en esa sala.

## Usuarios
/users - ruta para visualizar todos los usuarios
/users/:id ruta para ver el perfil de cada usuario y sus chats con otros usuarios, hay un enlace para ver la conversación.

El delete y update está creado pero no fue posible subirlo a tiempo, al igual que la eliminación de conversaciones. No se consideró el caso de eliminar ni editar mensajes individuales ni edición de las conversaciones, ya que no tienen sentido (conversation hasMany messages)


## Conversaciones
/conversations/:id ruta para ver una conversación con todos sus mensajes
/conversations/new crea una nueva conversación entre dos usuarios. Actualmente hay que poner el id de los usuarios, pero esto será modificado una vez implementado el sistema de sesión.

## Mensajes
/messages/new ruta para mandar un mensaje a otro usuario. Actualmente hay que poner el id de conversación y del usuario actual. Estos parámetros serán eliminados cuando se implemente el sistema de sesión.

## Salas:
/room - ruta para visualizar todas las salas
/room/:id - ruta para una sala en particular, se puede llegar directo desde la página principal haciendo click en “SALA” abajo de cada clase
/room/new - click en agregar- ruta para crear una nueva sala.


## Máquinas:
/machines - ruta para visualizar todas las máquinas
/machines/:id - click en Ver más - ruta para visualizar una máquina en particular
/machines/new -click en Agregar - ruta para crear una máquina nueva

## Membresías
/memberships - ruta para visualizar todas las membresías
/memberships/:id - click en Ver más - ruta para visualizar una membresía en particular
/memberships/new -click en Agregar - ruta para crear una membresía nueva

## Consideraciones:

Los usuarios se crearon con un atributo tipo que indica que tipo de usuario es. Si es cliente, especialista, o administrador. Para la entrega 3 se mejorará este aspecto.


## Rutas de la API

Login
Funcionalidad: Obtener el token de un usuario para acceder a las rutas privadas
Ruta: https://sleepy-brook-55941.herokuapp.com/api/auth
Método: POST
body: 
{
   "password": "123456",
   "email": "cliente1@gogym.cl"
}
response: 
{
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2LCJpYX"
}
Register 
Funcionalidad: Crear un nuevo usuario para acceder a la aplicación y API
Ruta: https://sleepy-brook-55941.herokuapp.com/api/register
Método
body: 
 {
   "name": "User",
   "password": "123456",
   "lastname": "New",
   "email": "newuser@gogym.cl",
   "rut": "11111111-1"
}
Response:
{
   "state": 201
}
Events
Funcionalidad obtener los eventos disponibles organizadas por el gimnasio
Ruta: https://sleepy-brook-55941.herokuapp.com/api/events
Método: GET
Response:
{
   {
       "id": 1,
       "name": "Crossfit",
       "description": "Dirigidas a todas las personas to...",
       "days": "Lunes, Miércoles y Viernes",
       "startsAt": "10:00:00",
       "endsAt": "11:00:00",
       "eventUrl": "http://localhost:3000/api/events/1"
   },
   {
       "id": 3,
       "name": "Ashtanga Yoga",
       "description": "Clases guiadas de la primera serie de asht...",
       "days": "Martes y Jueves",
       "startsAt": "19:00:00",
       "endsAt": "20:00:00",
       "eventUrl": "http://localhost:3000/api/events/3"
   },
}
Ruta: https://sleepy-brook-55941.herokuapp.com/api/events/id
Método: GET
Response:
{
   "id": 1,
   "name": "Crossfit",
   "description": "Dirigidas a todas las personas todas...",
   "days": "Lunes, Miércoles y Viernes",
   "startsAt": "10:00:00",
   "endsAt": "11:00:00",
   "roomId": 1,
   "image": "gbojhyzqqtj2sea7vnau",
}
 
Rutas privadas: Requieren el token de cada usuario en el header del request
Users
Funcionalidad: Obtener una lista de todos los usuarios
Ruta: http://sleepy-brook-55941.herokuapp.com/api/users/all
Método: GET
Response: 
{
   {
       "id": 2,
       "name": "Entrenador",
       "lastname": "Gogym",
       "email": "entrenador@gogym.cl",
       "rut": "11111111-2",
       "user_type": 2,
       "image": "default-user_nmftx2",
       "createdAt": "2020-12-01T03:24:32.127Z",
       "updatedAt": "2020-12-01T03:24:32.127Z"
   },
   {
"id": 3,
       "name": "Luis",
       "lastname": "Arancibia",
       "email": "entrenador1@gogym.cl",
       "rut": "11111111-3",
       "user_type": 2,
       "image": "default-user_nmftx2",
       "createdAt": "2020-12-01T03:24:32.127Z",
       "updatedAt": "2020-12-01T03:24:32.127Z"
 
   }
}
Funcionalidad: Obtener información personal de la cuenta
Ruta: https://sleepy-brook-55941.herokuapp.com/api/users/me
Método: GET
Response:
{
   "id": 1,
   "name": "Admin",
   "lastname": "Gogym",
   "email": "admin@gogym.cl",
   "rut": "11111111-1",
   "user_type": 0,
   "image": "default-user_nmftx2",
   "createdAt": "2020-12-01T03:24:32.127Z",
   "updatedAt": "2020-12-01T06:32:56.102Z"
}
Funcionalidad: Cambiar contraseña u otro de un usuario. Solo puedes cambiar información personal, no puedes cambiar el tipo de usuario. El administrador si puede.
Ruta: http://sleepy-brook-55941.herokuapp.com/api/users/:id
Método: PATCH
Body:
{
   "password": "123456",
   "email": "admin@gogym.cl"
}
Response:
	{
   "user": {
       "id": 1,
       "name": "Admin",
       "lastname": "Gogym",
       "email": "admin@gogym.cl",
       "rut": "11111111-1",
       "user_type": 0,
       "image": "default-user_nmftx2"
   	   }
}
Rooms
Funcionalidad:
Ruta: http://sleepy-brook-55941.herokuapp.com/api/rooms/
Método: GET
Response:
{
  {
       "id": 1,
       "gym_id": 1,
       "type": "Sala Principal",
       "capacity": 20,
       "image": null,
       "roomUrl": "http://localhost:3000/api/rooms/1"
   },
   {
       "id": 2,
       "gym_id": 2,
       "type": "Sala Mediana",
       "capacity": 15,
       "image": null,
       "roomUrl": "http://localhost:3000/api/rooms/2"
   },
}

Ruta: http://sleepy-brook-55941.herokuapp.com/api/rooms/:id
Método: GET
Response:
{
   "id": 1,
   "gym_id": 1,
   "type": "Sala Principal",
   "capacity": 20,
   "image": null
}

Ruta: http://sleepy-brook-55941.herokuapp.com/api/rooms
Método: POST
Body:
{
   "type": "Sala Consultas",
   "capacity": "5"
}
Response:
{
   "content": "sala creada"
}

Funcionalidad:
Ruta: http://sleepy-brook-55941.herokuapp.com/api/rooms/:id
Método: PATCH
Body:
{
   "capacity": "12"
}
Response:
{
   "room": {
       "id": 1,
       "gym_id": 1,
       "type": "Sala Principal",
       "capacity": "12",
       "image": null,
       "createdAt": "2020-12-01T03:24:32.137Z",
       "updatedAt": "2020-12-02T17:58:30.285Z"
   }
}
Funcionalidad: Eliminar una sala del gimnasio
Ruta: http://sleepy-brook-55941.herokuapp.com/api/rooms/:id
Método: DELETE
Response:
{
   "content": "sala eliminada"
}
Healthprofiles
Ruta: http://sleepy-brook-55941.herokuapp.com/api/healthprofiles
Método: GET
Response:
{
  {
       "id": 9,
       "user_id": 1,
       "birth": "2020-12-18T00:00:00.000Z",
       "level": null,
       "gender": 0,
       "height": 165,
       "weight": 55,
       "fat_percentage": 30,
       "emergency_number": 1234567,
       "description": "Buen progreso!",
       "healthprofileUrl": "http://localhost:3000/api/healthprofiles/9"
   },
   {
       "id": 10,
       "user_id": 3,
       "birth": "2020-12-22T00:00:00.000Z",
       "level": null,
       "gender": 1,
       "height": 165,
       "weight": 58,
       "fat_percentage": 30,
       "emergency_number": 1234567,
       "description": "Sigue así, recuerda mantener una dieta equilibrada",
       "healthprofileUrl": "http://localhost:3000/api/healthprofiles/10"
   }
}


Ruta: http://sleepy-brook-55941.herokuapp.com/api/healthprofiles/:id
Método: GET
Response:
{
   "id": 12,
   "user_id": 3,
   "gender": 1,
   "height": 165,
   "weight": 123,
   "fat_percentage": 50,
   "emergency_number": 1234567,
   "description": "comentario",
}


Ruta: http://sleepy-brook-55941.herokuapp.com/api/healthprofiles
Método: POST 
Body:
{
   "user_id": 3,
   "birth": "2020-12-24T00:00:00.000Z",
   "level": 5,
   "gender": 1,
   "height": 165,
   "weight": 123,
   "fat_percentage": 50,
   "emergency_number": 1234567,
   "description": "comentario"
}
Response:
{
   "content": "ficha creada"
}

Ruta: http://sleepy-brook-55941.herokuapp.com/api/healthprofiles/:id
Método: PATCH
Body:
{
   "emergency_number": 7777777
}
Response:
{
   "healthprofile": {
       "id": 12,
       "user_id": 3,
       "birth": "2020-12-24T00:00:00.000Z",
       "gender": 1,
       "height": 165,
       "weight": 123,
       "fat_percentage": 50,
       "emergency_number": 7777777,
       "description": "comentario",
   }
}


Ruta: http://sleepy-brook-55941.herokuapp.com/api/healthprofiles/:id
Método: DELETE
Response:
{
   "content": "ficha eliminada"
}
Machines
Ruta: http://sleepy-brook-55941.herokuapp.com/api/machines
Método: GET
Response:
{
       "id": 1,
       "name": "Trotadora",
       "description": "Maquina de ejercicio cardiovascular, simula trote en espacio abierto. Múltiples velocidades.",
       "available": true,
       "image": "txmbg8s794toj6chdffi",
       "tipo": "Cardio",
       "machineUrl": "http://localhost:3000/api/machines/1"
   },
   {
       "id": 2,
       "name": "Remadora",
       "description": "Máquina de ejercicio remadora",
       "available": true,
       "image": "rsh1frukkbxa7lap9lwg",
       "tipo": "Cardio",
       "machineUrl": "http://localhost:3000/api/machines/2"
   },
}

Ruta: http://sleepy-brook-55941.herokuapp.com/api/machines/:id
Método: GET
Response:
{
   "id": 3,
   "name": "Leg Press",
   "description": "Prensa de piernas con carga de discos. Capacidad de 880 lbs con traba manual de seguridad y almacenamiento posterior de discos.",
   "available": true,
   "image": "j8it1de3gae7eotcvxu5",
   "tipo": "Cardio"
}


Ruta: http://sleepy-brook-55941.herokuapp.com/api/machines
Método: POST
Body:
{
   "gym_id": 1,
   "name": "New",
   "description": "Nueva Máquina que perminte ...",
   "available": false,
   "image": "j8it1de3gae7eotcvxu5",
   "tipo": "Cardio"
}
Response:
{
   "content": "máquina creada"
}

Ruta: http://sleepy-brook-55941.herokuapp.com/api/machines/:id
Método: DELETE
Response:
{
   "content": "máquina eliminada"
}
